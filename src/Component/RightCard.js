import React from 'react'
import { compareDate } from '../Utils/UtilFunc'

const RightCard = ({ eventObj, setmodal }) => {
  const { price, isRSVP, eventStartTime, address, eventEndTime } = eventObj
  return (
    <div className='right-main'>
      <div className='right-details'>
        {/* <p>{`${} at ${}`} to 2023-07-13T07:00:00</p> */}
        <p>{address}</p>
        <p>Rs {price}</p>
      </div>
      <h1>Speakers</h1>
      {compareDate(eventStartTime) ? "" : isRSVP ? <button>Already RSVP</button> : <button onClick={() => setmodal(true)}>RSVP</button>}
    </div>
  )
}

export default RightCard