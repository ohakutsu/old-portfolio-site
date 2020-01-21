import React from 'react'
import PropTypes from 'prop-types'

export default function SnsButton ({ href, title }) {
  return (
    <a className='button' href={href}>{title}</a>
  )
}

SnsButton.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
}
