# Roadmap

This file is the canonical project tracker until Ordinal can track its own
development. Keep checkboxes honest, update **Current step** when work moves,
and add links to relevant decisions or pull requests where useful.

## Current step

**Phase 1 — Authentication:** define the user and session schema plus the shared
registration, login, current-session, and logout contracts. Start with failing
contract/domain tests; do not build UI forms until the HTTP behavior is proven.

Definition of done: the monorepo installs reproducibly; PostgreSQL starts in
Docker; the browser calls a validated NestJS endpoint through the typed client;
lint, typecheck, test, and build commands pass; setup is documented.

## Phase 0 — Foundation and walking skeleton

- [x] Choose workspace tooling and pin the supported Node and package-manager
      versions.
- [x] Scaffold `apps/web`, `apps/api`, and the initial shared packages.
- [x] Prove ts-rest integration across TanStack Query and NestJS with one endpoint.
- [x] Add PostgreSQL and Prisma with an initial migration and health check.
- [x] Add root scripts for formatting, linting, type checking, tests, and builds.
- [x] Add Docker Compose and `.env.example`.
- [x] Add CI for clean installation and all quality commands.
- [x] Record material architecture decisions.
- [x] Verify the documented setup with Dockerized PostgreSQL, the Prisma
      migration, both development servers, and browser/API health requests.

## Phase 1 — Authentication and ownership

- [ ] Model users and database-backed sessions.
- [ ] Implement registration, login, logout, expiry, and revocation.
- [ ] Add Argon2id hashing, secure cookie configuration, CSRF protection, and
      authentication rate limits.
- [ ] Create NestJS authentication middleware/guard and request context.
- [ ] Add development-only seeded credentials and a demo-login affordance.
- [ ] Test session lifecycle and cross-user isolation.

## Phase 2 — Project and task foundation

- [ ] Model projects, tasks, statuses, priorities, labels, and activity records.
- [ ] Implement project and task contracts and services.
- [ ] Build inbox capture and task detail editing.
- [ ] Build project list and task list views.
- [ ] Add filtering, ordering, pagination, empty states, and validation errors.
- [ ] Seed a coherent multi-project demo data set.

## Phase 3 — Workflow board and dependencies

- [ ] Build an accessible board with persisted ordering.
- [ ] Support task status transitions and optimistic updates with rollback.
- [ ] Model dependencies and reject cycles and self-dependencies.
- [ ] Derive blocked state from incomplete dependencies.
- [ ] Add keyboard alternatives to pointer-based drag and drop.
- [ ] Test concurrent/repeated reorder operations and domain invariants.

## Phase 4 — Explainable daily focus

- [ ] Specify scoring factors, weights, exclusions, and stable tie-breaking.
- [ ] Implement the versioned scoring policy as a pure domain module.
- [ ] Select tasks against a configurable daily capacity.
- [ ] Return structured score components and readable explanations.
- [ ] Persist daily-plan snapshots and policy versions.
- [ ] Build the Today view with manual add, remove, and reorder controls.
- [ ] Test boundaries including overdue tasks, no estimates, blockers, daylight
      saving changes, and multiple time zones.

## Phase 5 — Portability and product hardening

- [ ] Add versioned JSON export and validated restore.
- [ ] Add account/session management and data deletion.
- [ ] Finish activity history for important changes.
- [ ] Audit authorization, CSRF, cookie policy, rate limits, and security headers.
- [ ] Perform accessibility and responsive-layout passes.
- [ ] Add database backup and restore documentation.
- [ ] Measure and improve important query and page-load paths.

## Phase 6 — Portfolio release

- [ ] Make `docker compose up --build` provide a complete evaluation environment.
- [ ] Publish API documentation and an architecture diagram.
- [ ] Add screenshots, a short demo video, and a live demo if practical.
- [ ] Document tradeoffs, threat model, testing strategy, and focus-policy design.
- [ ] Add release automation and a tagged first release.
- [ ] Test all README instructions on a clean machine or environment.

## Later possibilities

These are deliberately uncommitted and should not interrupt the MVP:

- Recurring tasks
- Saved filters and command palette
- Progressive web app and offline capture
- Calendar feed export
- Multiple focus-policy presets
- Optional collaboration
