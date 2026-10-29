import { useState } from 'react'
import { useGetBrandsQuery } from '@/api/brands/brandsApi'
import { useGetOffersQuery } from '@/api/offers/offersApi'
import { SEARCH_DEBOUNCE, SEARCH_MIN_LENGTH } from '@/shared/config/constants'
import { useDebouncedCallback } from '@/shared/hooks/useDebouncedCallback'

const normalizeArticle = (value) => (value ?? '').replace(/\s+/g, '').toUpperCase()

export const useSearchPage = () => {
  const [article, setArticle] = useState('')
  const [brand, setBrand] = useState(null)

  const applyArticle = (value) => {
    const normalized = normalizeArticle(value)
    const next = normalized.length >= SEARCH_MIN_LENGTH ? normalized : ''
    if (next === article) return
    setArticle(next)
    setBrand(null)
  }

  const debouncedApplyArticle = useDebouncedCallback(applyArticle, SEARCH_DEBOUNCE)

  const handleArticleChange = (value) => {
    if (normalizeArticle(value)) {
      debouncedApplyArticle(value)
    } else {
      debouncedApplyArticle.cancel()
      applyArticle('')
    }
  }

  const handleArticleSubmit = (value) => {
    debouncedApplyArticle.cancel()
    applyArticle(value)
  }

  const brands = useGetBrandsQuery(article, { skip: !article })
  const brandList = brands.currentData

  const activeBrand = brand ?? (brandList?.length === 1 ? brandList[0].brand : null)

  const offers = useGetOffersQuery(
    { article, brand: activeBrand },
    { skip: !article || !activeBrand },
  )

  return {
    article,
    activeBrand,
    brands,
    offers,
    handleArticleChange,
    handleArticleSubmit,
    selectBrand: setBrand,
  }
}
