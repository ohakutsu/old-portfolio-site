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

export default function HeaderNavLink ({ handleClickNavLink, title }) {
  return (
    <Li>
      <a onClick={handleClickNavLink}>{title}</a>
    </Li>
  )
}

HeaderNavLink.propTypes = {
  handleClickNavLink: PropTypes.func,
  title: PropTypes.string
}
