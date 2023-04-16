import { LinksResponse, LinkResponse } from './types';
import { rest } from 'msw';

export const handlers = [
  rest.get('api/v1/links', (_req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.json<LinksResponse>({
        links: [
          {
            id: '9d9bec51-162f-4d54-acb4-9185be6655a4',
            destination: 'https://www.aha.io/pricing',
            link_url: 'http://localhost:3030/abcxyz',
            token: 'abcxyz',
            name: 'Cotopaxi Altitude Tech 5-Panel Hat | REI Co-op',
            created_at: '2020-07-11',
            status: 'live',
            total_views_count: 123456,
          },
          {
            id: '9d9bec51-162f-4d54-acb4-9185be6655a5',
            destination: 'https://www.aha.io/pricing',
            link_url: 'http://localhost:3030/qwerTY',
            token: 'qwerTY',
            created_at: '2020-07-13',
            status: 'paused',
            total_views_count: 23456,
            name: 'Cotopaxi Altitude Tech',
          },
        ]
      })
    )
  }),
  rest.post('api/v1/links', (_req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.delay(1000),
      ctx.json<LinkResponse>({
        link: {
            id: '9d9bec51-162f-4d54-acb4-9185be6655a4',
            destination: 'https://www.aha.io/pricing',
            link_url: 'http://localhost:3030/abcxyz',
            token: 'abcxyz',
            // created_at: '2020-07-11',
            status: 'live',
            total_views_count: 123456,
          },
      })
    )
  }),
]
