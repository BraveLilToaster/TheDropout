import React from 'react'
import styled from 'styled-components'

const Container = props => {
  const Container = styled.div`
    background-image: -webkit-gradient(linear,left top,right top,from(#f79533),color-stop(15%,#f37055),color-stop(30%,#ef4e7b),color-stop(44%,#a166ab),color-stop(58%,#5073b8),color-stop(72%,#1098ad),color-stop(86%,#07b39b),to(#6dba82));
    background-image: linear-gradient(70deg,#f79533 0%,#f37055 15%,#ef4e7b 30%,#a166ab 74%,#5073b8 100%);
    background-size: cover;
    background-repeat: no-repeat;
  `
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Section = props => {
  const Section = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    overflow: auto;
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
