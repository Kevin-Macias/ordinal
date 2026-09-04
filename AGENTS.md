# AGENTS.md

## Purpose

Ordinal is a self-hosted project tracker for individual developers. Its defining
feature is an explainable, deterministic daily focus list based on task
priority, deadlines, dependencies, age, estimates, project importance, and the
user's capacity. It must remain useful without AI, external integrations, paid
services, or third-party credentials.

## Read before changing the project

Read these files in order:

1. `README.md` — product summary, principles, stack, and repository guide.
2. `docs/product-brief.md` — user, problem, MVP scope, domain language, and
   product acceptance criteria.
3. `docs/architecture.md` — system boundaries, authentication model, and quality
   requirements.
4. `docs/roadmap.md` — canonical status and the current next step.

If implementation creates local instructions inside an app or package, read the
nearest `AGENTS.md` before modifying that area.

## Current next step

Begin the Phase 1 authentication slice described under **Current step** in
`docs/roadmap.md`. First define the user/session persistence model and the shared
registration, login, current-session, and logout contracts. Add failing tests
for validation and session behavior before implementing the NestJS services and
HTTP handlers. Keep email delivery and password recovery out of scope.

Do not begin later phases merely because their code is easy to scaffold. Update
this section and `docs/roadmap.md` together when the current step changes.

## Non-negotiable constraints

- A clean local setup must not require secrets belonging to an external service.
- NestJS owns authentication, authorization, business operations, and database
  access.
- The frontend must not import Prisma types or access the database directly.
- Network inputs are validated at runtime through shared contracts.
- Resource ownership is enforced by the API on every applicable operation.
- Passwords use Argon2id; sessions are server-side and revocable; authentication
  uses secure HTTP-only cookies rather than browser-stored bearer tokens.
- Date-only deadlines must not be modeled as instants.
- The focus engine remains pure, deterministic, versioned, and independently
  testable. It must return structured reasons for its decisions.
- No LLM, GitHub integration, OAuth provider, hosted authentication, billing,
  or production email dependency belongs in the MVP.
- Reviewer setup and seeded demo data are first-class product requirements.

## Working conventions

- Preserve the boundaries in `docs/architecture.md`; record deliberate changes
  as decisions rather than allowing accidental drift.
- Implement the smallest vertical slice that satisfies the active roadmap item.
- Add tests with behavior, especially for authorization and domain invariants.
- Do not expose persistence models as transport contracts.
- Prefer explicit names and straightforward code over framework cleverness.
- Update documentation in the same change when behavior or architecture changes.
- Mark a roadmap checkbox complete only after its definition is implemented and
  verified. Keep **Current step** precise enough for the next contributor.
- Never commit real secrets, generated credentials, or machine-specific paths.

## Completion checks

Before declaring an implementation task complete, run the relevant formatting,
linting, type-checking, unit, integration, end-to-end, and production-build
commands defined by the repository. During Phase 0, establish these commands and
document them in `README.md`.
