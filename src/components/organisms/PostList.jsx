import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PostItem from '../molecules/PostItem'
import loadingStyle from '../../lib/loadingStyle'

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`
const PostItemLoading = styled.div`
  margin: 5px 0;
  width: 100%;
  height: 95px;
  ${loadingStyle}
`

export default function PostList ({ posts }) {
  let postItems
  if (posts) {
    postItems = posts.map(post => {
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
  } else {
    postItems = []
    for (let i = 0; i < 5; i++) {
      postItems.push(<PostItemLoading key={i} />)
    }
  }

  return (
    <Wrapper>
      {postItems}
    </Wrapper>
  )
}

PostList.propTypes = {
  posts: PropTypes.array
}
