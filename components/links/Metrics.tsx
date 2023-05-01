interface MetricsProps {
  metrics: any[]
}

export const Metrics:React.FC<MetricsProps> = ({ metrics }) => {
  if (metrics.length === 0) {
    return (<></>)
  }

  return (
    <dl className="mx-auto grid grid-cols-1 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0 bg-white pt-2 pb-8"
        >
          <dt className="text-sm font-medium leading-6 text-gray-500">{metric.name}</dt>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
