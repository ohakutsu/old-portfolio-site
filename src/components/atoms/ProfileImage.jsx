import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Loading = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 0.4rem;
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
  width: 100px;
  height: 100px;
  border-radius: 0.4rem;
`

export default function ProfileImage ({ url }) {
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef()

  useEffect(() => {
    imgRef.current.addEventListener('load', () => {
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      <Img ref={imgRef} src={url} hidden={isLoading} />
    </>
  )
}

ProfileImage.propTypes = {
  url: PropTypes.string
}
