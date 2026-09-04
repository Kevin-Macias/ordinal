import { contract } from '@ordinal/contracts'
import { initTsrReactQuery } from '@ts-rest/react-query/v5'

export const api = initTsrReactQuery(contract, {
  baseUrl: import.meta.env.VITE_API_ORIGIN ?? '',
  baseHeaders: {},
  credentials: 'include',
})
