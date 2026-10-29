export const BrandList = ({ brands, value, onChange }) => (
  <div role="radiogroup" aria-label="Производитель" className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {brands.map(({ brand, name }) => {
      const selected = brand === value
      return (
        <button
          key={brand}
          type="button"
          role="radio"
          aria-checked={selected}
          onClick={() => onChange(brand)}
          className={`flex min-h-16 cursor-pointer flex-col items-start justify-center border px-4 py-3 text-left transition-colors ${
            selected
              ? 'border-primary bg-primary text-white'
              : 'border-line bg-white hover:border-primary hover:text-primary'
          }`}
        >
          <span className="font-bold uppercase">{brand}</span>
          {name && (
            <span className={`line-clamp-2 text-sm ${selected ? 'text-white/80' : 'text-muted'}`}>{name}</span>
          )}
        </button>
      )
    })}
  </div>
)
