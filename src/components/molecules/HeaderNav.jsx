import React from 'react'
import styled from 'styled-components'

import NavLink from '../atoms/NavLink'

const Nav = styled.nav`
  display: inline-block;
`
const Ul = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
  > li {
    margin: 0 20px;
  }
  @media (max-width: 767.98px) {
    > li {
      margin: 0 10px;
    }
  }
`

export default function HeaderNav () {
  return (
    <Nav>
      <Ul>
        <NavLink path='/' text='ホーム' />
        <NavLink path='/posts' text='最近の投稿' />
      </Ul>
    </Nav>
  )
}
