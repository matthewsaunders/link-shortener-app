import { UUID } from "crypto"

export type Linkk = {
  id: UUID
  destination: string
  token: string
  name: string
  created_at: string
}

export type LinkVisitsData = {
  visits: any[]
  total_visits: number
  seven_day_visits: number
  visits_per_day: number
}

export type LinksResponse = {
  links: Linkk[]
}

export type LinkResponse = {
  link: Linkk
}

export type LinkVisitsResponse = {
  data: LinkVisitsData
}
