import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Profile from '../organisms/Profile'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -5;
`

export default function HomeTemplate ({ snsLinks, imageSrc, description }) {
  return (
    <Wrapper>
      <Profile
        snsLinks={snsLinks}
        imageSrc={imageSrc}
        description={description}
      />
    </Wrapper>
  )
}

HomeTemplate.propTypes = {
  snsLinks: PropTypes.array,
  imageSrc: PropTypes.string,
  description: PropTypes.string
}
