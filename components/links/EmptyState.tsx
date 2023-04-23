import { PlusIcon, LinkIcon } from '@heroicons/react/20/solid';

interface EmptyStateProps {
  createNewLink: Function
}

export const EmptyState: React.FC<EmptyStateProps> = ({ createNewLink }) => {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="text-center">
        <LinkIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No links</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by creating a new link.</p>
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => createNewLink()}
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            New Link
          </button>
        </div>
      </div>
    </div>
  )
}
