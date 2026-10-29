import { Table } from 'antd'
import { OriginalTag } from '../Fields/OriginalTag'
import { Price } from '../Fields/Price'
import { Stock } from '../Fields/Stock'
import { WarehousesTable } from '../WarehousesTable'

const columns = [
  {
    title: 'Производитель',
    dataIndex: 'brand',
    render: (brand, offer) => (
      <div className="flex flex-col items-start gap-1">
        <span className="font-bold uppercase">{brand}</span>
        <span className="text-sm text-muted xl:hidden">{offer.article}</span>
        {offer.isOriginal && <OriginalTag />}
      </div>
    ),
  },
  { title: 'Артикул', dataIndex: 'article', className: 'hidden font-medium xl:table-cell' },
  { title: 'Наименование', dataIndex: 'name' },
  {
    title: 'Цена',
    dataIndex: 'price',
    align: 'right',
    sorter: (a, b) => a.price - b.price,
    render: (price) => <Price price={price} />,
  },
  {
    title: 'Остаток',
    dataIndex: 'stock',
    sorter: (a, b) => a.stock - b.stock,
    render: (stock) => <Stock stock={stock} />,
  },
]

export const OffersTable = ({ offers, loading }) => (
  <Table
    className="offers-table"
    columns={columns}
    dataSource={offers}
    rowKey="id"
    loading={loading}
    rowClassName={(offer) => (offer.isOriginal ? 'offer-original' : '')}
    expandable={{
      expandedRowRender: (offer) => <WarehousesTable warehouses={offer.warehouses} />,
      rowExpandable: (offer) => offer.warehouses.length > 0,
    }}
    pagination={{ pageSize: 20, hideOnSinglePage: true, showSizeChanger: false }}
    showSorterTooltip={false}
  />
)
