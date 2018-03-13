import React from 'react'
import styled from 'styled-components'

const Section = (props) => {
  const Section = styled.div`
    margin: 2rem 0;
    max-width: 1280px;
  `
  return (
    <Section>
      {props.children}
    </Section>
  )
}

export default Section

