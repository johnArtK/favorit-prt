import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import ruRU from 'antd/locale/ru_RU'
import SearchPage from '@/pages/SearchPage/SearchPage'
import { antdTheme } from '@/shared/config/theme'
import { store } from './store'

export const App = () => (
  <Provider store={store}>
    <StyleProvider layer>
      <ConfigProvider locale={ruRU} theme={antdTheme}>
        <div className="flex min-h-dvh flex-col">
          <header className="bg-ink text-white">
            <div className="container-page flex h-16 items-center gap-3 md:h-20">
              <span className="text-xl font-bold tracking-wide md:text-2xl">АВТОПОДБОР</span>
              <span className="hidden border-l border-white/30 pl-3 text-sm leading-tight text-white/80 sm:block">
                Поиск запчастей
                <br />и аналогов по артикулу
              </span>
            </div>
          </header>

          <SearchPage />

          <footer className="bg-ink py-6 text-sm text-white/60">
            <div className="container-page">Данные о ценах и остатках: API Favorit Parts</div>
          </footer>
        </div>
      </ConfigProvider>
    </StyleProvider>
  </Provider>
)
