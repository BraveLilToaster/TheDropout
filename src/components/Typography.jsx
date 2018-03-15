import React from 'react'
import styled from 'styled-components'

const font = {
  primary: 'The Hand',
  secondary: 'The Hand Regular',
}

const TextComponent = styled.p`
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
  font-family: ${font.primary};
  font-weight: ${props => props.fontWeight || 'normal'};
`

const Display4 = props => {
  const Display4 = TextComponent.withComponent('h1').extend`
    font-size: 7rem;
    margin: 1rem 0 2rem;
  `
  return (
    <Display4 {...props} />
  )
}

const Display3 = props => {
  const Display3 = TextComponent.withComponent('h2').extend`
    font-size: 6rem;
    margin: 0.9rem 0 1.8rem;
  `
  return (
    <Display3 {...props}/>
  )
}
const Display2 = props => {
  const Display2 = TextComponent.withComponent('h3').extend`
    font-size: 5rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Display2 {...props}/>
  )
}
const Display1 = props => {
  const Display1 = TextComponent.withComponent('h4').extend`
    font-size: 4rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Display1 {...props}/>
  )
}
const Headline = props => {
  const Headline = TextComponent.withComponent('h5').extend`
    font-size: 3.5rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Headline {...props} />
  )
}
const Title = props => {
  const Title = TextComponent.withComponent('h6').extend`
    font-weight: bold;
    font-size: 3rem;
    margin: 0.2rem 0 .3rem;
  `
  return (
    <Title {...props} />
  )
}
const Subheading = props => {
  const Subheading = TextComponent.withComponent('p').extend`
    font-weight: bold;
    font-size: 2.5rem;
    margin: 0.2rem 0 .3rem;
  `
  return (
    <Subheading {...props} />
  )
}
const Body2 = props => {
  const Body2 = TextComponent.withComponent('p').extend`
    font-weight: bold;
    font-size: 2rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Body2 {...props} />
  )
}
const Body1 = props => {
  const Body1 = TextComponent.withComponent('p').extend`
    font-size: 2rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Body1 {...props} />
  )
}

export {
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  Subheading,
  Body2,
  Body1,
}
