import { UUID } from "crypto"

export type Link = {
  id: UUID
  destination: string
  token: string
  name: string
  created_at: string
}

export type LinksResponse = {
  links: Link[]
}

export type LinkResponse = {
  link: Link
}

export type LinkVisitsData = {
  visits: any[]
  total_visits: number
  average_visits_per_day: number
}

export type LinkVisitsResponse = {
  data : LinkVisitsData
}
