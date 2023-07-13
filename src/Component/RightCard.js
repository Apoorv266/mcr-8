import React from 'react'
import { compareDate, getDateTimeFunc } from '../Utils/UtilFunc'

const RightCard = ({ eventObj, setmodal }) => {
  const { price, isRSVP, eventStartTime, address, eventEndTime } = eventObj
  return (
    <div className='right-main'>
      <div className='right-details'>
        <p>{`${getDateTimeFunc(eventStartTime).date} at ${getDateTimeFunc(eventStartTime).time}`} to {`${getDateTimeFunc(eventEndTime).date} at ${getDateTimeFunc(eventEndTime).time}`}</p>
        <p>{address}</p>
        <p>Rs {price}</p>
      </div>
      <h1>Speakers</h1>
      {compareDate(eventStartTime) ? "" : isRSVP ? <button>Already RSVP</button> : <button onClick={() => setmodal(true)}>RSVP</button>}
    </div>
  )
}

export default RightCard