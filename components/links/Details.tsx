import { useState } from 'react';
import { CalendarIcon, ClipboardDocumentIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

import { copyTextToClipboard } from '@/utilities';
import { ViewsGraph } from '@/components/links/ViewsGraph';
import { Metrics } from '@/components/links/Metrics';

interface DetailsProps {
  link?: object
}

const BASE_URL = `localhost:3000/a/`;

const fullLink = (token: string): string => `http://${BASE_URL}${token}`

export const Details: React.FC<DetailsProps> = ({ link }) => {
  if (!link) {
    return (
      <div className="w-full h-full grid place-items-center">
        <p className="text-gray-500 mx-auto">Select a link to view</p>
      </div>
    );
  }

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    copyTextToClipboard(fullLink(link.token))
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="">
      <section className="border-b border-gray-900/5 pb-4 xl:pb-8">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          { link.name }
        </h2>

        <dl className="mt-2 text-sm leading-6">
          <div className="flex items-center">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <dt className="inline text-gray-500 mr-1.5">
              Issued on
            </dt>
            <dd className="inline text-gray-700">
              <time dateTime="2023-23-01">January 23, 2023</time>
            </dd>
          </div>
          <div></div>
        </dl>
      </section>

      <section className="pt-4 xl:pt-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-medium tracking-tight text-indigo-600 sm:text-3xl">
              { `${BASE_URL}${link.token}` }
            </h2>

            <div className="flex items-center mt-2">
              <ArrowLongRightIcon className="h-5 w-5 mr-1.5 flex-shrink-0" />
              <p>{ link.destination }</p>
              <p className="text-gray-400 ml-3">(Redirect destination)</p>
            </div>
          </div>


          <button
            type="button"
            className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-normal text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 flex items-center"
            onClick={handleCopyClick}
          >
            <ClipboardDocumentIcon
              className="h-5 w-5 mr-1.5 flex-shrink-0 text-white"
              aria-hidden="true"
            />
            { isCopied ? 'Copied!' : 'Copy' }
          </button>
        </div>
      </section>

      <section className="pt-4 xl:pt-8">
        <Metrics />
      </section>

      <section className="pt-4 xl:pt-8 w-full h-96">
        <ViewsGraph link={link} />
      </section>
    </div>
  )
}
