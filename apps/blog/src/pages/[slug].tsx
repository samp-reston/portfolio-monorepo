import { GetServerSideProps } from 'next'
import React from 'react'

interface Props {
  blogPost: string
}

const BlogPost: React.FC<Props> = (props) => {
  const {blogPost} = props
  console.log(blogPost, "component")
  return (
    <div className='flex min-w-full flex-col px-body transition-all duration-300 ease-linear gap-4'>
      <h1 className='text-h1-mobile text-black-90 md:text-h1'>{blogPost}</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params)
  const blogPost = context.params?.slug || null
  console.log(blogPost, "GSSP")
  return {
    props: {
      blogPost
    }
  }
}

export default BlogPost