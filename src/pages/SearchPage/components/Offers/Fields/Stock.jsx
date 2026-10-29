export const Stock = ({ stock }) => (
  <span className="inline-flex items-center gap-2 whitespace-nowrap">
    <span className={`size-2 rounded-full ${stock > 0 ? 'bg-green-600' : 'bg-danger'}`} aria-hidden />
    {stock > 0 ? `${stock} шт.` : <span className="text-danger">Нет в наличии</span>}
  </span>
)
