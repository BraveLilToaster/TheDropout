import React from 'react'
import styled from 'styled-components'

const HeroVideo = (props) => {
  const HeroVideo = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 100vh;
    @media (min-width: 768px) {
      min-width: 1280px;
      min-height: 100vh;
    }
    @media (min-width: 1500px) {
      width: 100%;
    }
  `
  const VideoOverlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    background: #000;
    opacity: 0.5;
  `
  return(
    <div>
      <VideoOverlay />
      <HeroVideo loop muted autoPlay poster="http://res.cloudinary.com/bravetoaster/image/upload/v1520916557/IMG_8630.jpg">
        <source src="https://res.cloudinary.com/bravetoaster/video/upload/v1521134860/The%20Dropout/DropoutReel720.webm" type="video/webm"></source>
        <source src="https://res.cloudinary.com/bravetoaster/video/upload/v1521134774/The%20Dropout/DropoutReel720mp4.mp4" type="video/mp4"></source>
      </HeroVideo>
    </div>
  )

}

export default HeroVideo
