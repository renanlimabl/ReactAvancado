import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/vercel.svg" />
        <link rel="apple-touch-icon" href="/img/vercel.svg" />
        <link rel="manifest" href="/matifest.json" />
        <meta name="description" content="A simple project" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
