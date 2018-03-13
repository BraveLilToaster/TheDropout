import React from 'react'
import styled from 'styled-components'

const Display4 = props => {
  const Display4 = styled.h1`
    font-weight: 300;
    font-size: 5rem;
    text-align: ${props => props.align || 'left'};
  `
  return (
    <Display4 align={props.align}>
      {props.children}
    </Display4>
  )
}

const Display3 = props => {
  const Display3 = styled.h2`
    font-weight: 400;
    font-size: 4rem;
    text-align: ${props => props.align || 'left'}
  `
  return (
    <Display3 align={props.align}>
      {props.children}
    </Display3>
  )
}
const Display2 = props => {
  const Display2 = styled.h3`
    font-weight: 400;
    font-size: 3rem;
    text-align: ${props => props.align || 'left'}
  `
  return (
    <Display2 align={props.align}>
      {props.children}
    </Display2>
  )
}
const Display1 = props => {
  const Display1 = styled.h4`
    font-weight: 400;
    font-size: 1rem;
    text-align: ${props => props.align || 'left'}
  `
  return (
    <Display1>
      {props.children}
    </Display1>
  )
}

export {
  Display4,
  Display3,
  Display2,
  Display1,
}
