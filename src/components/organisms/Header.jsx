import React from 'react'
import styled from 'styled-components'

import Logo from '../atoms/Logo'
import HeaderNav from '../molecules/HeaderNav'

const Wrapper = styled.header`
  border-bottom: 1px solid #e0e0e0;
`
const Div = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 50px;
  width: 100%;
  max-width: 1000px;
  > :first-child {
    padding-right: 70px;
  }
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    
    > :first-child {
      padding: 0;
    }
  }
`

export default function Header () {
  return (
    <Wrapper>
      <Div>
        <Logo />
        <HeaderNav />
      </Div>
    </Wrapper>
  )
}
