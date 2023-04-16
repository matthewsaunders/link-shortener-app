interface Section {
  children: any
}

export const Section: React.FC<Section> = ({ children }) => {
  return (
    <section className="py-6 xl:py-12">
      { children }
    </section>
  )
}
