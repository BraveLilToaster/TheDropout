import React from 'react'
import styled from 'styled-components'
import dropoutText from '../img/TheDropout.svg'

const HeroText = () => {
  const HeroText = styled.img`
    position: absolute;
    z-index: 900;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-80%);
    width: calc(100% - 6rem);
    max-width: 30rem;
    fill: #fff;
    @media (min-width: 768px) {
      width: 20rem;
    }
  `
  const HeroImage = styled.img`
    width: 10rem;
  `
  return (
      <HeroText src={dropoutText} />
  )
}
export default HeroText
