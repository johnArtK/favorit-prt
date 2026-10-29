import { formatPrice } from '../utils'

export const Price = ({ price }) => {
  const formatted = formatPrice(price)
  return formatted ? (
    <span className="font-bold whitespace-nowrap">{formatted}</span>
  ) : (
    <span className="text-muted">Цена по запросу</span>
  )
}
