import React from 'react'
import styled from 'styled-components'
import { Title, Subheading, Body2 } from './Typography'

const TourDate = props => {
  const TourDate = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, .87);
    border-radius: 2px;
    background: rgba(240, 248, 254, .54)
  `
  const parseDatetime = (datetime) => {
    const tempDateTime = new Date(datetime)
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' }
    const timeOptions = {hour: '2-digit', minute:'2-digit'}
    return (tempDateTime.toLocaleDateString('en-US', dateOptions) + " @ " + tempDateTime.toLocaleTimeString([], timeOptions))
  }

  return (
    <TourDate>
      <Title>
        {props.venue.city}, {props.venue.region}
      </Title>
      <Subheading>
        {props.venue.name}
      </Subheading>
      <Body2>{ parseDatetime(props.datetime)}</Body2>
    </TourDate>
  )

}

export default TourDate
