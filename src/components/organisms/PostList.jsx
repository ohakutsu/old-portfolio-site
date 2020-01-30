import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PostItem from '../molecules/PostItem'

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`

export default function PostList ({ posts }) {
  const postItems = posts.map(post => {
    const { date, title, provider, link } = post

    return (
      <PostItem
        key={link}
        date={date}
        title={title}
        provider={provider}
        link={link}
      />
    )
  })

  return (
    <Wrapper>
      {postItems}
    </Wrapper>
  )
}

PostList.propTypes = {
  posts: PropTypes.array
}
