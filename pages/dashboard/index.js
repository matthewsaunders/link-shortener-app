import React, { useState } from 'react';

import { Links } from '@/components/links/Links';
import { NewLinkModal } from '@/components/links/NewLinkModal';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-full flex flex-col py-4 xl:py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 grow-0">Links</h1>

        <button
          type="button"
          className="mt-3 inline-flex w-full flex justify-center content-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setIsOpen(true)}
        >
          <PlusIcon className="mr-1 h-4 w-4" />
          New Link
        </button>
      </div>
      <div className="grow h-full pt-4 pb-6">
        <Links />
      </div>

      <NewLinkModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
