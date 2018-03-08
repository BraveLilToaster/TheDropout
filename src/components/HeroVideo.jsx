import React from 'react'
import styled from 'styled-components'
import heroVideoMP4720 from '../video/DropoutReel720.mp4'

const HeroVideo = (props) => {
  const HeroVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100vh;
  @media (min-width: 768px) {
    min-width: 1280px;
    width: 100%;
    min-height: 100vh;
  }
`
  return(
    <HeroVideo loop muted autoPlay poster="img/videoframe.jpg">
      <source src={heroVideoMP4720} type="video/mp4"></source>
    </HeroVideo>
  )

}

export default HeroVideo
