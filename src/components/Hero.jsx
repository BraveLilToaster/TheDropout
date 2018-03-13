import React from 'react'
import styled from 'styled-components'

const Hero = (props) => {
const HeroBackground = styled.div`
	position: relative;
  overflow: hidden;
  min-height: 100vh;
  @media (min-width: 768px) {
    min-height: 85vh;
  }
`
  return(
  <HeroBackground>
    {props.children}
  </HeroBackground>
  )

}

export default Hero
