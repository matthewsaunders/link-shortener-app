import { useState, useEffect } from 'react';

import { List } from '@/components/links/List';
import { Details } from '@/components/links/Details';
import { EmptyState } from '@/components/links/EmptyState';
import { Loading } from '@/components/Loading';
import { BASE_URL } from '@/utilities';

interface LinksProps {
  reloadLinks: boolean
  setReloadLinks: Function
  createNewLink: Function
}

export const Links: React.FC<LinksProps> = ({ reloadLinks = false, setReloadLinks, createNewLink }) => {
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState(undefined);
  const [linksLoading, setLinksLoading] = useState(true);

  const onSelectLink = (link: any) => {
    setSelectedLink(link);
  }

  useEffect(() => {
    // Only load links
    if (!reloadLinks) { return }

    setLinksLoading(true);

    fetch(
      `${BASE_URL}/v1/links`,
      {
        headers: {
          'Origin': '*',
          'Access-Control-Request-Method': 'true',
        }
      }
    )
    .then((res) => res.json())
    .then((data) => {
      setLinks(data?.links || []);
      setLinksLoading(false);
      setReloadLinks(false);
    })
    .catch((err) => {
      console.error(err);
    })

  }, [reloadLinks]);

  // Loading screen
  if (linksLoading) {
    return (
      <Loading />
    )
  }

  // Empty State screen
  if (!linksLoading && links.length === 0) {
    return (
      <EmptyState createNewLink={createNewLink} />
    )
  }

  // Links screen
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
