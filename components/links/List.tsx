import { BASE_URL } from '@/utilities';

interface ListProps {
  selectedLinkId: string
  links: object[]
  onSelectLink: Function
}

export const List: React.FC<ListProps> = ({ links, selectedLinkId, onSelectLink }) => {
  const isSelectedLink = (link: any) => link.id === selectedLinkId

  if (links.length === 0) {
    return (
      <div className="w-full h-full grid place-items-center">
        <p className="text-gray-500 mx-auto">No links</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden bg-white shadow">
      <ul role="list" className="divide-y divide-gray-200">
        {links.map((link) => (
          <li key={link.id}>
            <a className={`block hover:bg-gray-50 hover:cursor-pointer px-4 py-4 ${isSelectedLink(link) && 'bg-gray-100'}`} onClick={() => onSelectLink(link)}>
              <div className="">
                <h3 className="text-lg overflow-hidden truncate text-ellipsis font-normal leading-6 text-gray-900">
                  { link.name }
                </h3>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-light text-indigo-600">
                    { BASE_URL }/a/
                    <span className="font-medium">{ link.token }</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
