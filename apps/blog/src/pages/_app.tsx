import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp ({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
