import React from 'react'
import styled from 'styled-components'
import SocialLink from './SocialLink'

const SocialHeader = props => {
  const SocialHeader = styled.div`
    position: absolute;
    z-index: 4;
    right: 0;
  `
  return (
    <SocialHeader>
      {
        props.socialLinks.map((socialLink, i) => {
          return (
            <SocialLink
              key={i}
              icon={socialLink.icon}
              link={socialLink.link}
            />
          )
        })
      }
    </SocialHeader>
  )
}

export default SocialHeader
