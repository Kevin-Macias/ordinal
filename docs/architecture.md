# Architecture

## System shape

```text
Browser
  |
  | HTTPS + secure session cookie
  v
TanStack web application
  |
  | typed ts-rest client
  v
NestJS API
  |-- authentication and authorization
  |-- application services
  |-- focus-policy domain module
  |-- Prisma repository adapters
  v
PostgreSQL
```

The web application does not import Prisma or access PostgreSQL. NestJS owns
authentication, authorization, business operations, and persistence. Shared
packages contain contracts and pure domain logic, not database access.

## Planned repository layout

```text
apps/
  web/                 # TanStack Start application
  api/                 # NestJS application
packages/
  contracts/           # ts-rest contracts and Zod schemas
  domain/              # pure business rules and focus engine
  ui/                  # reusable presentation components
  config/              # shared tooling configuration
prisma/
  schema.prisma
  migrations/
  seed.ts
docs/
```

This layout is a target for Phase 0 and may change through a recorded decision.

## API contracts

- Define transport inputs, outputs, and typed errors in `packages/contracts`.
- Validate untrusted input at runtime; TypeScript types alone are insufficient.
- Do not expose Prisma-generated types as the public API.
- Keep transport mapping explicit so persistence changes do not leak into the
  frontend.
- Generate an OpenAPI document from the shared contracts.

## Authentication

The initial implementation uses email and password with server-side sessions:

- Hash passwords with Argon2id through a maintained library.
- Generate session tokens with a cryptographically secure random source.
- Store only a token hash in PostgreSQL.
- Send the raw token in an HTTP-only cookie, with `Secure` in production and an
  intentional `SameSite` policy.
- Rotate the session at authentication boundaries and support logout and
  revocation.
- Protect unsafe requests against CSRF and rate-limit authentication attempts.
- Authorize every resource operation by the authenticated user ID.

Production password recovery is deferred because it would require email
infrastructure. Development uses documented seed credentials.

## Domain rules

- Status transitions are enforced by the API rather than only by the UI.
- A dependency graph cannot contain a cycle or self-reference.
- Deadlines are calendar dates; audit and session fields are timestamps.
- Focus generation accepts the current date and time zone as explicit inputs.
- Focus scoring is a pure function with deterministic tie-breaking.
- Persisted daily plans retain their policy version and score explanation.

## Local reproducibility

The target developer experience is one documented command that starts the web
app, API, and PostgreSQL, applies migrations, and makes seed data available.
No paid service, OAuth application, SMTP server, or private API credential is
required. Environment variables must have safe local examples in `.env.example`.

## Quality boundaries

- Unit tests cover focus scoring, capacity selection, dependency validation,
  and date behavior.
- API integration tests cover validation, session lifecycle, and cross-user
  authorization.
- End-to-end tests cover the core capture-to-focus workflow.
- CI runs formatting, linting, type checking, tests, migration checks, and a
  production build.
- Architecture decisions that change these boundaries should be recorded under
  `docs/decisions/` when implementation begins.
