# Ordinal

> Know what to work on next, and why.

Ordinal is a self-hosted project and task tracker for individual developers. It
combines familiar project, backlog, and board views with a deterministic daily
focus list. The focus engine ranks actionable work from explicit inputs such as
priority, deadlines, dependencies, age, and available capacity. Every ranking
is explainable and requires no AI service or external API key.

The repository now includes the Phase 0 walking skeleton: a TanStack web app,
NestJS API, shared contract, and PostgreSQL/Prisma package.

## Why this project exists

Large project-management products are often optimized for organizations and
place useful workflows behind hosted subscriptions. Ordinal aims to be small
enough for one developer, straightforward to run locally, and substantial
enough to demonstrate production-minded full-stack engineering.

## Product principles

- **Explainable:** recommendations show the factors that produced them.
- **Self-hostable:** a reviewer can run the complete system without paid
  services or third-party credentials.
- **Focused:** individual planning comes before team administration.
- **Portable:** the application provides documented export and restore paths.
- **Inspectable:** contracts, domain rules, migrations, and security boundaries
  are explicit in the source.
- **Accessible:** core workflows work with a keyboard and assistive technology.

## Intended stack

- TanStack Start, React, TypeScript, and TanStack Query for the web application
- NestJS for the HTTP API and application services
- ts-rest and Zod for shared, runtime-validated API contracts
- Prisma and PostgreSQL for persistence
- Database-backed sessions, Argon2id password hashes, and secure HTTP-only
  cookies for authentication
- Docker Compose for a credential-free local environment
- Vitest/Jest and Playwright for automated testing

The exact package versions and integration shape will be established during
Phase 0 rather than assumed in advance.

## Core experience

1. Capture a task in the inbox.
2. Add it to a project and give it a priority, estimate, and optional deadline.
3. Mark dependencies or blockers.
4. Open **Today** to receive a capacity-limited, ranked focus list.
5. Inspect why each task was selected and adjust the plan when needed.
6. Complete work and see project progress update.

## Repository guide

- [Product brief](docs/product-brief.md) defines the users, problem, scope, and
  acceptance criteria.
- [Architecture](docs/architecture.md) defines system boundaries and technical
  decisions that implementation must preserve.
- [Roadmap](docs/roadmap.md) is the canonical source of project status and the
  next deliverable.
- [AGENTS.md](AGENTS.md) tells coding agents and contributors how to navigate
  the project and determine what to do next.

## Local development

Requirements:

- Node.js 24
- pnpm 11.18.0 through Corepack
- Docker with Compose

Set up and start PostgreSQL:

```bash
corepack enable
pnpm install
cp .env.example .env
docker compose up -d postgres
pnpm db:deploy
```

Then run both applications:

```bash
pnpm dev
```

The web app is available at `http://localhost:3000`; the NestJS API listens on
`http://localhost:3001`. The home page calls `GET /api/health` through the
shared ts-rest contract and reports whether PostgreSQL is connected.

Useful checks:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

The end-to-end test replaces the database probe with a test double, so it does
not require PostgreSQL. Database migrations and a real health check do.

## Public documentation policy

The root README, `AGENTS.md`, roadmap, product brief, architecture notes, and
architecture decisions are intentionally committed. They show how the project
was reasoned about and delivered. Secrets and private working notes do not
belong in those documents; local environment files are ignored.

## Current status

Phase 0 is complete: the scaffold compiles, automated checks pass, the migration
applies to Dockerized PostgreSQL, and the web-to-API-to-database health path has
been verified. Phase 1 authentication is next. See
[the roadmap](docs/roadmap.md) for authoritative status.
