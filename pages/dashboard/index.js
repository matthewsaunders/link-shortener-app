import React from 'react';

import { Links } from '@/components/links/Links'

export default function Dashboard() {
  return (
    <div className="h-full flex flex-col py-4 xl:py-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 grow-0">Links</h1>
      <div className="grow h-full my-4">
        <Links />
      </div>
    </div>
  )
}
