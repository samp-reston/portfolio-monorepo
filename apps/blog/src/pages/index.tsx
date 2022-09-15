import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import RecentPosts from '../components/RecentPosts'

const Home: NextPage = () => {
  return (
    <div id="body" className='flex flex-col items-start gap-28'>
      <Head>
        <title>Sam Preston | Web Developer</title>
        <meta name="description" content="Samuel Preston | Fullstack Web Developer | I'm passionate about bringing safety to systems through cutting-edge technology with reliability built-in. All the while bringing your dreams to life through beautiful interfaces with user-experience at the forefront." />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="fullstack developer, freelance, samuel preston, sam preston, kings heath developer, web developer"/>
        <meta name="author" content="Samuel Preston"/>
        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="index, follow"/>
        <meta name="geo.region" content="GB-BIR"/>
        <meta property="og:title" content="Sam Preston | Glob" />
        <meta property="og:description" content="Samuel Preston | Fullstack Web Developer | I'm passionate about bringing safety to systems through cutting-edge technology with reliability built-in. All the while bringing your dreams to life through beautiful interfaces with user-experience at the forefront." />
        <meta property="og:image" content="https://www.sampreston.co.uk/portrait.webp" />
        <meta property="og:url" content="https://www.sampreston.co.uk/" />
        <meta name="twitter:title" content="Sam Preston | Web Developer" />
        <meta name="twitter:description" content="Samuel Preston | Fullstack Web Developer | I'm passionate about bringing safety to systems through cutting-edge technology with reliability built-in. All the while bringing your dreams to life through beautiful interfaces with user-experience at the forefront." />
        <meta name="twitter:url" content="https://www.sampreston.co.uk/" />
        <meta name="twitter:card" content="Samuel Preston | Fullstack Web Developer" />
      </Head>
      <Hero />
      <RecentPosts />
    </div>
  )
}

export default Home
