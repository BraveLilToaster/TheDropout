import React from 'react'
import Media from "react-media"
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import dropoutText from '../img/TheDropout.svg'
import dropoutTextHorizontal from '../img/TheDropoutHorizontal.svg'

const HeroText = () => {
  const HeroText = styled(SVG)`
    position: absolute;
    z-index: 900;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: calc(100% - 6rem);
    max-width: 30rem;
    fill: #fff;
    @media (min-width: 768px) {
      width: 100%;
      transform: translate(-50%,-80%);
      max-width: 45rem;
    }
  `
  return (
    <Media query={{ maxWidth: 767 }}>
      {matches =>
        matches ? (
          <HeroText src={dropoutText} />
        ) : (
          <HeroText src={dropoutTextHorizontal} />
        )
      }
    </Media>
  )
}
export default HeroText
