import { createFileRoute } from '@tanstack/react-router'

import { api } from '../lib/api'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const health = api.health.get.useQuery({ queryKey: ['health'] })

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-amber-700 uppercase">
        Ordinal
      </p>
      <h1 className="max-w-3xl text-5xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-7xl">
        Know what to work on next—and why.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        A self-hosted project tracker with deterministic, explainable daily
        planning. No subscriptions, external API keys, or opaque
        recommendations.
      </p>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-slate-950">System status</h2>
        {health.isPending && (
          <p className="mt-2 text-slate-500">Checking the API…</p>
        )}
        {health.isError && (
          <p className="mt-2 text-red-700">
            API unavailable. Start PostgreSQL and the NestJS application.
          </p>
        )}
        {health.data?.status === 200 && (
          <p className="mt-2 text-emerald-700">
            API ready · Database {health.data.body.database}
          </p>
        )}
      </section>
    </main>
  )
}
