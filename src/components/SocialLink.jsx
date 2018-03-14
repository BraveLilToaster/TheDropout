import React from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'

const SocialLink = props => {
  const SocialLinkContainer = styled.span`
    display: inline-block;
    padding: 1rem;
  `
  const SocialSVG = styled(SVG)`
    & svg{
      height: 3rem;
      width: 3rem;
      & path {
        fill: #fff;
      }
      &:hover {
        & path{
          fill: rgb(30, 215, 96);
        }
      }
    }
  `

  return (
    <SocialLinkContainer>
      <a href={props.link}>
        <SocialSVG
          src={ props.icon }
        >
        </SocialSVG>
      </a>
    </SocialLinkContainer>
  )
}

export default SocialLink
