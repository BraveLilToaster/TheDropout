import React from 'react'
import styled from 'styled-components'

const font = {
  primary: 'The Hand',
  secondary: 'The Hand Regular',
}

const Display4 = props => {
  const Display4 = styled.h1`
    text-align: ${props => props.align || 'left'};
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: normal;
    font-size: 7rem;
    margin: 1rem 0 2rem;
  `
  return (
    <Display4 align={props.align} color={props.color}>
      {props.children}
    </Display4>
  )
}

const Display3 = props => {
  const Display3 = styled.h2`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 400;
    font-size: 6rem;
    margin: 0.9rem 0 1.8rem;
  `
  return (
    <Display3 align={props.align} color={props.color}>
      {props.children}
    </Display3>
  )
}
const Display2 = props => {
  const Display2 = styled.h3`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 400;
    font-size: 5rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Display2 align={props.align} color={props.color}>
      {props.children}
    </Display2>
  )
}
const Display1 = props => {
  const Display1 = styled.h4`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 400;
    font-size: 4rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Display1 align={props.align} color={props.color}>
      {props.children}
    </Display1>
  )
}
const Headline = props => {
  const Headline = styled.h5`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 400;
    font-size: 3.5rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Headline align={props.align} color={props.color}>
      {props.children}
    </Headline>
  )
}
const Title = props => {
  const Title = styled.h6`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 700;
    font-size: 3rem;
    margin: 0.2rem 0 .3rem;
  `
  return (
    <Title align={props.align} color={props.color}>
      {props.children}
    </Title>
  )
}
const Subheading = props => {
  const Subheading = styled.p`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 700;
    font-size: 2.5rem;
    margin: 0.2rem 0 .3rem;
  `
  return (
    <Subheading align={props.align} color={props.color}>
      {props.children}
    </Subheading>
  )
}
const Body2 = props => {
  const Body2 = styled.p`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 700;
    font-size: 2rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Body2 align={props.align} color={props.color}>
      {props.children}
    </Body2>
  )
}
const Body1 = props => {
  const Body1 = styled.p`
    text-align: ${props => props.align || 'left'}
    color: ${props => props.color || 'rgba(0, 0, 0, .87)'};
    font-family: ${font.primary};
    font-weight: 400;
    font-size: 2rem;
    margin: 0.5rem 0 1rem;
  `
  return (
    <Body1 align={props.align} color={props.color}>
      {props.children}
    </Body1>
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
