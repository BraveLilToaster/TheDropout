import React from 'react'
import styled from 'styled-components'

const Container = props => {
  const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
  `
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Section = props => {
  const Section = styled.div`
    margin: 1rem 0;
  `
  return (
    <Section>
      {props.children}
    </Section>
  )
}

export {
  Container,
  Section,
}
