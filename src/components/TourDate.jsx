import React from 'react'
import styled from 'styled-components'
import { Display1, Headline, Title, Subheading, Body2 } from './Typography'

const TourDate = props => {
  const TourDate = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, .87);
    border-radius: 2px;
    background-image: -webkit-gradient(linear, left top, right top, from(#f79533), color-stop(15%, #f37055), color-stop(30%, #ef4e7b), color-stop(44%, #a166ab), color-stop(58%, #5073b8), color-stop(72%, #1098ad), color-stop(86%, #07b39b), to(#6dba82));
    background-image: linear-gradient(70deg, #f79533 0%, #f37055 15%, #ef4e7b 30%, #a166ab 74%, #5073b8 100%);
    background-size: cover;
    background-repeat: no-repeat;
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
