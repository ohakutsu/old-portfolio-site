import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 2px;
  animation-name: gradation;
  animation: gradation 5s linear infinite;
  @keyframes gradation {
    0% {
      color: #3f51b5;
    }
    50% {
      color: #212121;
    }
    100% {
      color: #3f51b5
    }
  }
  @media (max-width: 767.98px) {
    font-size: 3rem;
  }
`

export default function ProfileName ({ text }) {
  return (
    <H1>{text}</H1>
  )
}

ProfileName.propTypes = {
  text: PropTypes.string
}
