import { useState, useEffect } from 'react';

import { List } from '@/components/links/List';
import { Details } from '@/components/links/Details';
import { Loading } from '@/components/Loading';

export const Links = () => {
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState(undefined);
  const [linksLoading, setLinksLoading] = useState(false);

  useEffect(() => {
    setLinksLoading(true);

    fetch('/api/v1/links')
      .then((res) => res.json())
      .then((data) => {
        console.log('DEBUG..');
        console.log(data);
        setLinks(data['links'] || []);
        setLinksLoading(false);
      })
  }, []);

  return (
    <>
      <div className="flex h-full">
        <aside className="border border-green-300 grow-0 h-full hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          { !!linksLoading && <Loading /> }
          { !linksLoading && <List links={links} onSelectLink={setSelectedLink} /> }
        </aside>

        <main className="grow">
          <div className="border border-blue-300 h-full px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            <Details link={selectedLink} />
          </div>
        </main>
      </div>
    </>
  )
}
