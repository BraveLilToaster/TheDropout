import React from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'

const SocialLink = props => {
  const SocialLinkContainer = styled.span`
    display: inline-block;
    padding: 1rem;
    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `
  const SocialSVG = styled(SVG)`
    & svg{
      height: 3rem;
      width: 3rem;
      @media (min-width: 48rem) {
        height: 3.5rem;
        width: 3.5rem;
      }
      & .background {
        fill: #fff;
        transition: all .4s ease-out;
      }
      & .foreground {
        fill: rgba(0,0,0,0);
        transition: all .2s ease-out;
      }
      &:hover {
        & .background{
          fill: ${props => props.color || 'rgb(0, 0, 0)'};
        }
      }
      &:hover {
        & .foreground{
          fill: rgb(255,255,255);
        }
      }
    }
  `

  return (
    <SocialLinkContainer>
      <a href={props.link}>
        <SocialSVG
          src={ props.icon }
          color={ props.color }
        >
        </SocialSVG>
      </a>
    </SocialLinkContainer>
  )
}

export default SocialLink
