import React from 'react'
import "../Style/SingleEvent.css"
const LeftCard = ({eventObj}) => {
  const {title, eventThumbnail,eventDescription, additionalInformation: {dressCode, ageRestrictions}, eventTags, hostedBy} = eventObj
  return (
    <div className='left-main'>
        <h1>{title}</h1>
        <p>Hosted by:</p>
        <h3>{hostedBy}</h3>
        <img src={eventThumbnail} alt="" srcSet="" width={"500px"}/>
        <p>Marketing experts</p>
        <h1>Details : </h1>
        <p>
     {eventDescription}
        </p>
        <h1>Additional Details : </h1>
        <p><strong>Dress Code : </strong>{dressCode}</p>
        <p><strong>Age restrictions : </strong>{ageRestrictions}</p>
        <h1>Event Tags</h1>
        <div className='tag-wrapper'>
        {eventTags?.map((item) => <div className='tags-main'>{item}</div>)}
        </div>
    </div>
  )
}

export default LeftCard