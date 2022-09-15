import { FunctionComponent } from 'react'

import Header from './Header'
import Footer from './Footer/Footer'

interface PropTypes {
  children: React.ReactNode
}

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center break-words bg-gradient-to-b from-primary to-base pb-16">
      <Header />
      <main className='min-w-full'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
