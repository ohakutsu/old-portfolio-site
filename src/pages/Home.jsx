import React, { useState, useEffect } from 'react'

import Api from '../lib/api'
import HomeTemplate from '../components/templates/HomeTemplate'

export default function Home () {
  const [imageSrc, setImageSrc] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [snsLinks, setSnsLinks] = useState(undefined)

  useEffect(() => {
    (async () => {
      const { imageSrc, description, snsLinks } = await Api.getProfileData()
      setImageSrc(imageSrc)
      setDescription(description)
      setSnsLinks(snsLinks)
    })()
  }, [])

  return (
    <HomeTemplate snsLinks={snsLinks} imageSrc={imageSrc} description={description} />
  )
}
