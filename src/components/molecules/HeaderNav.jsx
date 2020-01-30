import React from 'react'
import styled from 'styled-components'
import HeaderNavLink from '../atoms/HeaderNavLink'

const Ul = styled.ul`
  display: inline-block;
  margin: 0;
  
  > li {
    padding: 5px 20px;
  }
`

export default function HeaderNav () {
  return (
    <nav>
      <Ul>
        <HeaderNavLink title='Home' handleClick={() => console.log('Go to Home page.')} />
        <HeaderNavLink title='Posts' handleClick={() => console.log('Go to Posts page.')} />
      </Ul>
    </nav>
  )
}
