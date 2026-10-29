const EMPTY_ID = '00000000-0000-0000-0000-000000000000'

export const isRealItem = (item) => Boolean(item?.brand) && item.goodsID !== EMPTY_ID

export const getGoods = (response) =>
  Array.isArray(response?.goods) ? response.goods.filter(isRealItem) : []

export const uniqueBy = (items, getKey) => [...new Map(items.map((item) => [getKey(item), item])).values()]
