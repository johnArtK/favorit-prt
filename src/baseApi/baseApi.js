import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_PATH, API_TIMEOUT } from '@/shared/config/constants'
import { normalizeError } from './errors'

const rawBaseQuery = fetchBaseQuery({ baseUrl: API_PATH, timeout: API_TIMEOUT })

const baseQuery = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions)

  if (result.error) return { ...result, error: normalizeError(result.error) }
  if (result.data?.error) {
    return { ...result, data: undefined, error: normalizeError({ status: 200, data: result.data }) }
  }
  return result
}

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
})
