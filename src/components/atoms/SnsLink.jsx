import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.a`
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #3f51b5;
  border-radius: 5px;
  font-size: 1.2rem;
  color: #3f51b5;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  :hover {
    background-color: #3f51b5;
    color: #ffffff;
  }
`

export default function SnsLink ({ href, text }) {
  return (
    <Button href={href} target='_blank'>{text}</Button>
  )
}

SnsLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}
