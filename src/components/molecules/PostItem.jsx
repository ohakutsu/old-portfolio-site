import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 2.6rem;
`
const Date = styled.p`
  margin: 0;
`

export default function PostItem ({ url, title, date }) {
  return (
    <div>
      <Title>
        <a href={url}>{title}</a>
      </Title>
      <Date>{date}</Date>
    </div>
  )
}

PostItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
}
