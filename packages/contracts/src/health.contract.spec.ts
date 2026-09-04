import { describe, expect, it } from 'vitest'

import { healthResponseSchema } from './health.contract.js'

describe('health response contract', () => {
  it('rejects an invalid service response', () => {
    const result = healthResponseSchema.safeParse({
      service: 'something-else',
      status: 'ok',
      database: 'connected',
      timestamp: new Date().toISOString(),
    })

    expect(result.success).toBe(false)
  })
})
