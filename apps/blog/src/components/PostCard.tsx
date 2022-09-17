import React, { FunctionComponent } from 'react'

interface PropTypes {
  post: {
    title: string,
    date: string,
    description: string
  }
}

const PostCard: FunctionComponent<PropTypes> = ({post}) => {
  const { title, date, description } = post
  return (
    <div className='bg-base border-secondary border-2 rounded-lg p-4 flex-grow max-w-md flex flex-col gap-2'>
      <h3 className='text-h3-mobile text-black-90 md:text-h3'>{title}</h3>
      <p className='italic text-xs text-black-90'>{date}</p>
      <p className='text-p-mobile text-black-90'>{description}</p>
    </div>
  )
}

export default PostCard