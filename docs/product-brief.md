# Product brief

## Product statement

Ordinal is a self-hosted work tracker for individual developers who need a
clear, defensible answer to “what should I work on today?” without paying for a
team-oriented project-management subscription.

## Primary user

An individual developer managing several personal, freelance, learning, or
open-source projects. The user wants enough structure to choose work well, but
does not need organization charts, billing, or complex team workflows.

## Problem

A board records where tasks are, but it does not necessarily help decide what
to do next. Deadlines, importance, blockers, task age, estimates, and daily
capacity compete for attention. Existing tools can be costly or too broad, and
opaque recommendations cannot be trusted or tuned.

## Value proposition

Ordinal turns project data into a daily focus list using a deterministic,
tested scoring policy. It displays the contributing factors for every result,
allows manual overrides, and runs without external services.

## Initial domain model

- **User:** owns projects, preferences, and sessions.
- **Project:** groups related tasks and has an importance level and lifecycle.
- **Task:** has a title, description, status, priority, estimate, optional due
  date, position, and timestamps.
- **Dependency:** makes one task depend on another; cycles are invalid.
- **Daily plan:** a dated snapshot containing selected tasks, ordering, score
  explanations, and manual adjustments.
- **Activity:** records meaningful changes for traceability.
- **Session:** represents a revocable authenticated browser session.

## Daily focus policy

Only actionable tasks are candidates. Completed, cancelled, and blocked tasks
are excluded. Candidates receive a score from explicit components:

```text
score = priority + deadline urgency + overdue boost
      + project importance + age bonus + quick-win adjustment
```

The engine orders candidates deterministically and selects work until the
user's daily capacity is reached. Stable tie-breaking must prevent the list
from changing between identical runs. Each result includes human-readable
reasons, for example:

```text
82 — High priority · due tomorrow · blocks 2 tasks · estimated 45 minutes
```

The specific weights belong in a versioned policy and will be finalized with
tests during the focus-engine phase. Generated plans are snapshots so policy
changes do not silently rewrite history.

## MVP scope

- Register, sign in, sign out, and revoke sessions.
- Create, update, archive, and browse projects.
- Capture, edit, order, filter, and transition tasks.
- Model task dependencies and prevent dependency cycles.
- Use inbox, list, board, project, and Today views.
- Configure daily capacity and generate an explainable focus list.
- Override the generated list without losing the original explanation.
- Export and restore user-owned data.
- Run locally with seeded demo data and no external credentials.

## Explicitly out of scope for MVP

- AI or LLM features
- GitHub or other source-control integrations
- OAuth and third-party identity providers
- Real-time collaboration and organizations
- Billing and subscriptions
- Native mobile or desktop clients
- Email delivery and production password recovery
- File attachments

## Success criteria

- A new reviewer can launch the system and access realistic demo data using one
  documented setup flow.
- A user can capture a task and obtain an explained daily recommendation in
  less than one minute.
- Focus results are deterministic for the same policy, inputs, date, and time
  zone.
- Authorization tests prove that one user cannot access another user's data.
- Core keyboard workflows and automated accessibility checks pass.
- The repository documents architecture, tradeoffs, tests, and deployment.

## Product risks

- **Scope growth:** defer collaboration and integrations until the core loop is
  used regularly.
- **False precision:** describe focus scores as prioritization aids, not an
  objective measure of value.
- **Date errors:** represent date-only deadlines separately from timestamps and
  test multiple time zones.
- **Demo friction:** seed a development-only user and data set; never require an
  email provider or API key.
