import React from 'react'
import PostCard from './PostCard'

const posts = [
  {
    title: 'Hello World',
    date: '2021-08-01',
    description: 'This is my first post on my new blog. I\'m excited to share my thoughts and experiences with you all.'
  },
  {
    title: 'Hello World',
    date: '2021-08-01',
    description: 'This is my first post on my new blog. I\'m excited to share my thoughts and experiences with you all.'
  },
  {
    title: 'Hello World',
    date: '2021-08-01',
    description: 'This is my first post on my new blog. I\'m excited to share my thoughts and experiences with you all.'
  },
]

const RecentPosts = () => {
  return (
    <div className='flex min-w-full flex-col px-body transition-all duration-300 ease-linear gap-4'>
      <h2 id="recent-posts" className='text-h2-mobile text-black-90 md:text-h2'>Recent Posts</h2>
      <section id="recent-posts-grid" className='flex flex-wrap gap-8'>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </section>
    </div>
  )
}

export default RecentPosts