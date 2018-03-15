import React from 'react'
import styled from 'styled-components'
import TourDate from './TourDate'

const TourDateList = props => {
  const TourDateList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1px;
    padding: 0 1rem;
    @media (min-width: 48rem) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 60rem) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `
  return (
    <TourDateList>
      {
        props.tourDates.map( tourDate => {
          return <TourDate key={tourDate.id} {...tourDate} />
        })
      }
    </TourDateList>
  )
}

export default TourDateList
