import { DataLoader, Section } from '@/shared/ui'
import { BrandList } from './components/BrandList/BrandList'
import { Offers } from './components/Offers/Offers'
import { SearchForm } from './components/SearchForm/SearchForm'
import { useSearchPage } from './hooks'

const SearchPage = () => {
  const {
    article,
    activeBrand,
    brands,
    offers,
    handleArticleChange,
    handleArticleSubmit,
    selectBrand,
  } = useSearchPage()

  return (
    <main className="flex-1">
      <section className="bg-linear-to-br from-ink to-ink-3 py-10 text-white md:py-16">
        <div className="container-page">
          <h1 className="text-2xl leading-tight font-bold uppercase md:text-4xl">
            Подбор автозапчастей
            <br />и аналогов
          </h1>
          <p className="mt-3 max-w-xl text-white/70 md:text-lg">
            Введите артикул, выберите производителя — покажем цены и остатки по детали и её аналогам.
          </p>
          <div className="mt-6 max-w-3xl md:mt-8">
            <SearchForm
              loading={brands.isFetching}
              onChange={handleArticleChange}
              onSubmit={handleArticleSubmit}
            />
          </div>
        </div>
      </section>

      <div className="container-page flex flex-col gap-6 py-6 md:py-10">
        {!article && (
          <Section title="Как это работает">
            <ol className="grid gap-4 md:grid-cols-3">
              {[
                'Введите артикул детали в поле поиска',
                'Выберите производителя из найденных',
                'Сравните цены и остатки по аналогам',
              ].map((text, index) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {article && (
          <Section title="Производитель" subtitle={`Артикул ${article}`}>
            <DataLoader query={brands} emptyText={`По артикулу ${article} ничего не найдено`}>
              {(data) => <BrandList brands={data} value={activeBrand} onChange={selectBrand} />}
            </DataLoader>
          </Section>
        )}

        {article && activeBrand && (
          <Section
            title="Предложения и аналоги"
            subtitle={`${activeBrand} · ${article}`}
            extra={offers.currentData && `Найдено: ${offers.currentData.length}`}
          >
            <DataLoader query={offers} emptyText="Предложений по этой детали нет">
              {(data) => <Offers offers={data} loading={offers.isFetching} />}
            </DataLoader>
          </Section>
        )}
      </div>
    </main>
  )
}

export default SearchPage
