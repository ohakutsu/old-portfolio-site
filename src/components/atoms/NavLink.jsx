import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function NavLink ({ path, text }) {
  const location = useLocation()
  const currentPath = location.pathname
  const isActive = path === currentPath

  const Li = styled.li`
    display: inline-block;
    margin: 0;
    padding: 0;
    > a {
      display: block;
      position: relative;
      margin: 0;
      padding: 20px 0;
      color: ${isActive ? '#212121' : '#616161'};
      text-decoration: none;
      :hover {
        color: #212121;
        ::after {
          width: 100%;
        }
      }
      ::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: ${isActive ? '100%' : 0};
        height: 2px;
        background-color: #3f51b5;
        transition: 0.2s width;
      }
    }
  `

  return (
    <Li>
      <Link to={path}>{text}</Link>
    </Li>
  )
}

NavLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string
}
