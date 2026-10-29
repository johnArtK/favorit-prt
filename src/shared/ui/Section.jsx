export const Section = ({ title, subtitle, extra, children }) => (
  <section className="border border-line bg-white p-4 md:p-6">
    <header className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 md:mb-6">
      <div>
        <h2 className="text-lg font-bold uppercase md:text-xl">{title}</h2>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      {extra && <span className="text-sm text-muted">{extra}</span>}
    </header>
    {children}
  </section>
)
