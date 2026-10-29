import { Table } from 'antd'
import { Price } from './Fields/Price'
import { Stock } from './Fields/Stock'
import { formatDate } from './utils'

const columns = [
  { title: 'Склад', dataIndex: 'code' },
  { title: 'Цена', dataIndex: 'price', align: 'right', render: (price) => <Price price={price} /> },
  { title: 'Остаток', dataIndex: 'stock', render: (stock) => <Stock stock={stock} /> },
  { title: 'Отгрузка', dataIndex: 'shipmentDate', render: formatDate },
]

export const WarehousesTable = ({ warehouses }) => (
  <Table
    size="small"
    columns={columns}
    dataSource={warehouses}
    rowKey="id"
    pagination={false}
  />
)
