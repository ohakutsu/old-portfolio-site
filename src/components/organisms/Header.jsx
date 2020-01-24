import React from 'react'
import styled from 'styled-components'
import HeaderNav from '../molecules/HeaderNav'

const Wrapper = styled.div`
  margin: 10px 0;
  text-align: center;
`

export default function Header () {
  return (
    <Wrapper>
      <HeaderNav />
    </Wrapper>
  )
}
