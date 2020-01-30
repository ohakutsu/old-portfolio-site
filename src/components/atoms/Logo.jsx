import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  
  > a {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    color: #212121;
    text-decoration: none;
  }
`

export default function Logo () {
  return (
    <Wrapper>
      <Link to='/'>ohakutsu</Link>
    </Wrapper>
  )
}
