import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PostItem from '../molecules/PostItem'

const Wrapper = styled.div`

`

export default function PostItems ({ posts }) {
  const postItems = posts.map(post => {
    const { url, title, updated_at: updatedAt } = post
    const parsedUpdatedAt = new Date(updatedAt)
    const date = `${parsedUpdatedAt.getFullYear()}/${parsedUpdatedAt.getMonth() + 1}/${parsedUpdatedAt.getDate()}`

    return (
      <PostItem key={url} url={url} title={title} date={date} />
    )
  })

  return (
    <Wrapper>
      {postItems}
    </Wrapper>
  )
}

PostItems.propTypes = {
  posts: PropTypes.array
}
