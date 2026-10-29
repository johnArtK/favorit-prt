import { baseApi } from '@/baseApi/baseApi'
import { toOffers } from './transformer'

export const offersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOffers: build.query({
      query: ({ article, brand }) => ({ url: '', params: { number: article, brand, analogues: 'on' } }),
      transformResponse: toOffers,
    }),
  }),
})

export const { useGetOffersQuery } = offersApi
