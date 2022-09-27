import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

import Layout from '../components/Layout'
import Head from 'next/head'

import favicon from '../../public/images/favicon.ico'
import favicon32 from '../../public/images/favicon-32x32.png'
import favicon16 from '../../public/images/favicon-16x16.png'
import apple from '../../public/images/apple-touch-icon.png'
import portrait from '../../public/images/portrait.webp'

function MyApp ({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={apple.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src}/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src}/>
        <meta property="og:image" content={portrait.src} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
