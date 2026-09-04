# ADR 0001: Use ts-rest for API contracts

- Status: accepted
- Date: 2026-09-03

## Context

Ordinal needs an explicit, runtime-validated contract shared by the TanStack
frontend and NestJS API. oRPC was initially proposed. During the walking
skeleton, its current NestJS integration documentation required oRPC 2 beta,
while the stable 1.x packages exposed a different API.

## Decision

Use stable ts-rest 3 with Zod 3. ts-rest provides a contract-first HTTP model,
a maintained NestJS adapter, TanStack Query v5 integration, typed status/body
responses, and OpenAPI generation without requiring code generation.

## Consequences

- The API remains visibly HTTP-oriented rather than presenting endpoints as
  opaque remote functions.
- Contracts are shared without exposing Prisma models to the browser.
- NestJS guards, interceptors, and dependency injection remain available.
- Zod stays on version 3 until stable ts-rest supports Zod 4; upgrading requires
  a deliberate compatibility check.
- Reconsidering oRPC should wait until its NestJS integration is stable and
  provides a material advantage over this setup.
