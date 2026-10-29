import { Button, Empty, Result, Spin } from 'antd'

const isEmptyData = (data) => data == null || (Array.isArray(data) && data.length === 0)

export const DataLoader = ({ query, emptyText, children }) => {
  const { currentData, isFetching, error, refetch } = query

  if (isFetching && currentData === undefined) {
    return (
      <div className="flex justify-center py-12">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <Result
        status="error"
        title={error.message}
        extra={<Button onClick={refetch}>Повторить</Button>}
      />
    )
  }

  if (isEmptyData(currentData)) {
    return <Empty className="py-8" image={Empty.PRESENTED_IMAGE_SIMPLE} description={emptyText} />
  }

  return children(currentData)
}
