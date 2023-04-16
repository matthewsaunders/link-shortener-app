import { UUID } from "crypto"

export type Link = {
  id: UUID
  destination_url: string
  link_url: string
  token: string
  status: string
  total_views_count: number
}

export type LinksResponse = {
  links: Link[]
}

export type LinkResponse = {
  link: Link
}

// {
//   id: '9d9bec51-162f-4d54-acb4-9185be6655a4',
//   destination_url: 'https://www.aha.io/pricing',
//   link_url: 'http://localhost:3030/abcxyz',
//   token: 'abcxyz',
//   created_at: '2020-07-11',
//   status: 'live',
//   total_views_count: 123456,
// },
