import { UUID } from "crypto"

// Type Link is spelt Linkk because of a collision with next.js Link component
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
