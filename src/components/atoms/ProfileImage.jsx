import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const imageBaseStyle = `
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 10px;
`
const Loading = styled.div`
  ${imageBaseStyle}
  background: linear-gradient(90deg, #ccc, #eee, #ccc);
  background-size: 200% auto;
  animation: loading 0.5s infinite linear;
  @keyframes loading {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
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
  }, [])

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
