import React from 'react'
import styled from 'styled-components'
import dropoutText from '../img/DropoutTextWhite.png'

const HeroText = () => {
  const HeroText = styled.img`
    position: absolute;
    z-index: 900;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 10rem;
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
