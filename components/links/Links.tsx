import { useState, useEffect } from 'react';

import { List } from '@/components/links/List';
import { Details } from '@/components/links/Details';
import { Loading } from '@/components/Loading';

export const Links = () => {
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState(undefined);
  const [linksLoading, setLinksLoading] = useState(false);

  const onSelectLink = (link) => {
    setSelectedLink(link);
  }

  useEffect(() => {
    setLinksLoading(true);

    fetch('/api/v1/links')
      .then((res) => res.json())
      .then((data) => {
        setLinks(data['links'] || []);
        setLinksLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex h-full max-h-full overflow-y-hidden">
        <aside className="grow-0 h-full hidden w-96 overflow-y-scroll border border-gray-200 border-r-0 xl:block">
          { !!linksLoading && <Loading /> }
          { !linksLoading && <List links={links} selectedLinkId={selectedLink?.id} onSelectLink={onSelectLink} /> }
        </aside>

        <main className="grow border border-gray-200">
          <div className="h-full px-4 py-5 xl:px-8 xl:py-10 overflow-y-scroll">
            <Details link={selectedLink} />
          </div>
        </main>
      </div>
    </>
  )
}
