const stats = [
  { name: 'Total Visits', value: '123,456' },
  { name: 'Visits / Day', value: '1,234' },
];

export function Metrics() {
  return (
    <dl className="mx-auto grid grid-cols-1 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white py-8"
        >
          <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
