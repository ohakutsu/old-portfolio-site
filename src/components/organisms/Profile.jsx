import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ProfileImage from '../atoms/ProfileImage'
import ProfileName from '../atoms/ProfileName'
import SnsLink from '../atoms/SnsLink'
import loadingStyle from '../../lib/loadingStyle'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`
const Left = styled.div`
  margin-right: 30px;
  @media (max-width: 767.98px) {
    margin: 0;
  }
`
const Right = styled.div`
  width: 450px;
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
  }
`
const FullName = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  color: #212121;
  @media (max-width: 767.98px) {
    font-size: 1.4rem;
  }
`
const Description = styled.p`
  margin: 0;
  padding: 20px 0;
  font-size: 1.2rem;
  color: #212121;
  @media (max-width: 767.98px) {
    padding: 10px 0;
    font-size: 1rem;
  }
`
const LinksWrapper = styled.div`
  margin: 0;
  padding: 0;
  @media (max-width: 767.98px) {
    text-align: center;
  }
`
const DescLoading = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 29px;
  ${loadingStyle}
  @media (max-width: 767.98px) {
    margin: 10px 0;
    height: 24px;
  }
`
const SnsLinksLoading = styled.div`
  width: 100%;
  height: 44px;
  ${loadingStyle}
  @media (max-width: 767.98px) {
    text-align: center;
  }
`

export default function Profile ({ imageSrc, description, snsLinks }) {
  let snsList
  if (snsLinks) {
    snsList = snsLinks.map(snsLink => {
      const { link, title } = snsLink

      return (
        <SnsLink key={title} href={link} text={title} />
      )
    })
  }

  return (
    <Wrapper>
      <Left>
        <ProfileImage src={imageSrc} />
      </Left>
      <Right>
        <ProfileName text='ohakutsu' />
        <FullName>TakuyaHanada</FullName>
        {description ? <Description>{description}</Description> : <DescLoading />}
        {snsLinks ? (
          <LinksWrapper>
            {snsList}
          </LinksWrapper>
        ) : <SnsLinksLoading />}
      </Right>
    </Wrapper>
  )
}

Profile.propTypes = {
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  snsLinks: PropTypes.array
}
