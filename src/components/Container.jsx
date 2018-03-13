import React from 'react'
import styled from 'styled-components'

const Container = (props) => {
  const Container = styled.div`
    margin: 0 auto;
    max-width: 1280px;
  `
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Container
