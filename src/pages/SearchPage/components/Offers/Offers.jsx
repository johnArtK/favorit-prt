import { Spin } from 'antd'
import { OfferCardsMobile } from './views/OfferCardsMobile'
import { OffersTable } from './views/OffersTable'

// Choosing rendering on mobile or desktop by screen width by tailwind classes.
export const Offers = ({ offers, loading }) => (
  <>
    <div className="md:hidden">
      <Spin spinning={loading}>
        <OfferCardsMobile offers={offers} />
      </Spin>
    </div>
    <div className="hidden md:block">
      <OffersTable offers={offers} loading={loading} />
    </div>
  </>
)
