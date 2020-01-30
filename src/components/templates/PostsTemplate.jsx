import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PostList from '../organisms/PostList'

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 50px 0;
  max-width: 800px;
  @media (max-width: 767.98px) {
    padding: 20px 10px 0;
  }
`
const Title = styled.h1`
  display: inline-block;
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
  border-bottom: 2px solid #3f51b5;
  font-size: 2rem;
  font-weight: normal;
  color: #212121;
  @media (max-width: 767.98px) {
    font-size: 1.4rem;
  }
`
const TitleWrapper = styled.div`
  text-align: center;
`
const PostListWrapper = styled.div`
  padding: 50px 0;
  @media (max-width: 767.98px) {
    padding: 20px 0;
  }
`

export default function PostsTemplate ({ posts }) {
  return (
    <Container>
      <TitleWrapper>
        <Title>最新の投稿</Title>
      </TitleWrapper>
      <PostListWrapper>
        <PostList posts={posts} />
      </PostListWrapper>
    </Container>
  )
}

PostsTemplate.propTypes = {
  posts: PropTypes.array
}
