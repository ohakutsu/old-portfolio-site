import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Li = styled.li`
  display: inline-block;
  list-style-type: none;

  > a {
    :hover {
      cursor: pointer;
    }
  }
`

export default function HeaderNavLink ({ handleClick, title }) {
  return (
    <Li>
      <a onClick={handleClick}>{title}</a>
    </Li>
  )
}

HeaderNavLink.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string
}
