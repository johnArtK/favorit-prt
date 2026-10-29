import { OriginalTag } from '../Fields/OriginalTag'
import { Price } from '../Fields/Price'
import { Stock } from '../Fields/Stock'

// Rendering on mobile only 
export const OfferCardsMobile = ({ offers }) => (
  <ul className="-mx-4 divide-y divide-line border-y border-line">
    {offers.map((offer) => (
      <li key={offer.id} className={`flex flex-col gap-2 px-4 py-3 ${offer.isOriginal ? 'bg-primary/8' : ''}`}>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-bold uppercase">{offer.brand}</span>
          <span className="text-sm text-muted">{offer.article}</span>
          {offer.isOriginal && <OriginalTag />}
        </div>
        <p className="text-sm">{offer.name}</p>
        <div className="flex items-center justify-between gap-3">
          <Stock stock={offer.stock} />
          <Price price={offer.price} />
        </div>
      </li>
    ))}
  </ul>
)
