interface Container {
  children: any
}

export const Container: React.FC<Container> = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border border-red-500 h-full">
        { children }
      </div>
    </div>
  )
}
