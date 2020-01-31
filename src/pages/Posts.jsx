import React, { useState, useEffect } from 'react'

import Api from '../lib/api'
import PostTemplate from '../components/templates/PostsTemplate'

export default function Post () {
  const [posts, setPosts] = useState(undefined)

  useEffect(() => {
    (async () => {
      const { posts } = await Api.getPostsData()
      setPosts(posts)
    })()
  }, [])

  return (
    <PostTemplate posts={posts} />
  )
}
