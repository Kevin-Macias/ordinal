import { healthContract } from './health.contract.js'

export { healthContract, healthResponseSchema } from './health.contract.js'

export const contract = { health: healthContract }

export type Contract = typeof contract
