import { getGoods, uniqueBy } from '../utils'

export const toBrands = (response) =>
  uniqueBy(getGoods(response), (item) => item.brand).map(({ brand, name, number }) => ({
    brand,
    name,
    article: number,
  }))
