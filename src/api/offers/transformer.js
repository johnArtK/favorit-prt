import { getGoods, isRealItem, uniqueBy } from '../utils'

const toOffer = (item, isOriginal) => ({
  id: item.goodsID,
  brand: item.brand,
  article: item.number,
  name: item.name,
  price: Number(item.price) || 0,
  stock: Number(item.count) || 0,
  isOriginal,
  warehouses: (item.warehouses ?? []).map(({ id, code, price, stock, shipmentDate }) => ({
    id,
    code,
    price: Number(price) || 0,
    stock: Number(stock) || 0,
    shipmentDate,
  })),
})

const compareAnalogues = (a, b) =>
  Number(b.stock > 0) - Number(a.stock > 0) ||
  Number(a.price === 0) - Number(b.price === 0) ||
  a.price - b.price

export const toOffers = (response) => {
  const goods = getGoods(response)
  const originals = goods.map((item) => toOffer(item, true))
  const analogues = goods
    .flatMap((item) => (Array.isArray(item.analogues) ? item.analogues : []))
    .filter(isRealItem)
    .map((item) => toOffer(item, false))
    .sort(compareAnalogues)

  return uniqueBy([...originals, ...analogues], (offer) => offer.id)
}
