import { Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { SEARCH_DEBOUNCE, SEARCH_MIN_LENGTH } from '@/shared/config/constants'

const EXAMPLES = ['0189', '01089', '7160500039S']

const rules = [{ min: SEARCH_MIN_LENGTH, message: `Минимум ${SEARCH_MIN_LENGTH} символа` }]

export const SearchForm = ({ loading, onChange, onSubmit }) => {
  const [form] = Form.useForm()

  const searchExample = (article) => {
    form.setFieldValue('article', article)
    form.submit()
  }

  return (
    <Form
      form={form}
      onValuesChange={({ article }) => onChange(article)}
      onFinish={({ article }) => onSubmit(article)}
    >
      <Form.Item name="article" rules={rules} validateDebounce={SEARCH_DEBOUNCE} className="mb-0">
        <Input.Search
          size="large"
          placeholder="Артикул, например 0189"
          aria-label="Артикул"
          autoComplete="off"
          allowClear
          loading={loading}
          enterButton={
            <span className="flex items-center gap-2">
              <SearchOutlined />
              <span className="hidden sm:inline">НАЙТИ</span>
            </span>
          }
          onSearch={() => form.submit()}
        />
      </Form.Item>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/60">
        <span>Например:</span>
        {EXAMPLES.map((article) => (
          <button
            key={article}
            type="button"
            className="cursor-pointer text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            onClick={() => searchExample(article)}
          >
            {article}
          </button>
        ))}
      </div>
    </Form>
  )
}
