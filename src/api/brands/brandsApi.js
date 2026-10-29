import { baseApi } from '@/baseApi/baseApi'
import { toBrands } from './transformer'

export const brandsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBrands: build.query({
      query: (article) => ({ url: '', params: { number: article } }),
      transformResponse: toBrands,
    }),
  }),
})

export const { useGetBrandsQuery } = brandsApi
