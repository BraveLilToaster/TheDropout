import React from 'react'
import TourDate from './TourDate'

const TourDateList = props => {
  return (
    <div>
      {
        props.tourDates.map( tourDate => {
          return <TourDate key={tourDate.id} {...tourDate} />
        })
      }
    </div>
  )
}

export default TourDateList
