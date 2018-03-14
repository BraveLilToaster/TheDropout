import React from 'react'
import styled from 'styled-components'
import SocialLink from './SocialLink'

const SocialHeader = props => {
  const SocialHeader = styled.div`
    position: absolute;
    z-index: 4;
    right: 0;
    padding: .5rem;
    @media (min-width: 768px) {
      padding: 1rem;
    }
  `
  return (
    <SocialHeader>
      {
        props.socialLinks.map((socialLink, i) => {
          return (
            <SocialLink
              key={i}
              {...socialLink}
            />
          )
        })
      }
    </SocialHeader>
  )
}

export default SocialHeader
