import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export const healthResponseSchema = z.object({
  service: z.literal('ordinal-api'),
  status: z.literal('ok'),
  database: z.enum(['connected', 'unavailable']),
  timestamp: z.string().datetime(),
})

export const healthContract = c.router(
  {
    get: {
      method: 'GET',
      path: '/health',
      responses: { 200: healthResponseSchema },
      summary: 'Check API and database health',
    },
  },
  { pathPrefix: '/api' },
)
