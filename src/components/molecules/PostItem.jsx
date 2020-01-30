import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const dateFormatter = dateString => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}/${month}/${day}`
}

const Wrapper = styled.a`
  display: block;
  margin: 0;
  padding: 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s box-shadow;
  :hover {
    box-shadow: 0 0 5px 5px #e0e0e0;
  }
`
const Provider = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0 10px;
  color: #3f51b5;
  border: 1px solid #3f51b5;
`
const Title = styled.h2`
  margin: 5px 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: normal;
  color: #212121;
`
const ReleaseDate = styled.div`
  margin: 0;
  padding: 0;
  color: #757575;
`

export default function PostItem ({ link, provider, title, date }) {
  return (
    <Wrapper href={link}>
      <Provider>{provider}</Provider>
      <Title>{title}</Title>
      <ReleaseDate>{dateFormatter(date)}</ReleaseDate>
    </Wrapper>
  )
}

PostItem.propTypes = {
  link: PropTypes.string,
  provider: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
}
