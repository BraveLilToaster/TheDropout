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

  const BelowTheFoldArrow = styled.div`
  `
  const HeroBottomGradient = styled.div`
    position: absolute;
    height: 10vh;
    width: 100%;
    bottom: 0px;
    z-index: 6;
    background: linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.33) 67%,rgba(0, 0, 0, 0.54) 100%);
  `
  return(
  <HeroBackground>
    {props.children}
    <HeroBottomGradient />
  </HeroBackground>
  )

}

export default Hero
