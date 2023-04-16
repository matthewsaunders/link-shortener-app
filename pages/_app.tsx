import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Container } from '@/components/Container'

// Start msw
// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
if (true) {
  require('../mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Component {...pageProps} />
      </Container>

      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </>
  )
}
