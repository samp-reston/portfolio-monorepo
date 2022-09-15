import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import portrait from '../assets/portrait.webp'

const Hero: FunctionComponent = () => {
  return (
    <div id="hero" className='flex w-full flex-col gap-8 px-body transition-all duration-300 ease-linear'>
      <div id="titles" className='flex flex-col items-start'>
        <h1 className='text-h1-mobile text-black-90 md:text-h1'>Welcome To My Blog</h1>
      </div>
      <p className='w-full text-p-mobile text-black-90 sm:w-4/5 md:text-p'>
        On this blog I ramble about new technology, and share my opinions on old technology. I also write about my experiences as a developer, and my journey to becoming a fullstack developer.
      </p>
    </div>
  )
}

export default Hero
