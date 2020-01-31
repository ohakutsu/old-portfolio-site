import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import loadingStyle from '../../lib/loadingStyle'

const imageBaseStyle = `
  width: 200px;
  height: 200px;
  border-radius: 10px;
`
const Loading = styled.div`
  ${imageBaseStyle}
  ${loadingStyle}
`
const Img = styled.img`
  ${imageBaseStyle}
`

export default function ProfileImage ({ src }) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageSrc, setImageSrc] = useState(undefined)
  const imgRef = useRef()

  useEffect(() => {
    setImageSrc(prevImageSrc => (prevImageSrc || src))

    const handleLoading = () => setIsLoading(false)
    imgRef.current.addEventListener('load', handleLoading)

    return () => {
      imgRef.current.removeEventListener('load', handleLoading)
    }
  })

  return (
    <>
      {isLoading && <Loading />}
      <Img ref={imgRef} src={imageSrc} hidden={isLoading} />
    </>
  )
}

ProfileImage.propTypes = {
  src: PropTypes.string
}
