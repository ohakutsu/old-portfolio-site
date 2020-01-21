import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Li = styled.li`
  display: inline-block;
  margin: 0;
  list-style-type: none;

  > a {
    font-size: 2rem;

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
