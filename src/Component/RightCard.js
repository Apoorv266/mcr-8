import React from "react";
import { compareDate, getDateTimeFunc } from "../Utils/UtilFunc";

const RightCard = ({ eventObj, setmodal }) => {
  const { price, isRSVP, eventStartTime, address, eventEndTime, speakers } =
    eventObj;
  return (
    <div className="right-main">
      <div className="right-details">
        <p>
          {`${getDateTimeFunc(eventStartTime).date} at ${
            getDateTimeFunc(eventStartTime).time
          }`}{" "}
          to{" "}
          {`${getDateTimeFunc(eventEndTime).date} at ${
            getDateTimeFunc(eventEndTime).time
          }`}
        </p>
        {address && <p>{address}</p>}
        <p>{price === "Free" ? price : `Rs ${price}`}</p>
      </div>

      {speakers.length > 0 && <>
        <h1>Speakers ({speakers.length})</h1>
      <div className="speakers-main">
        {speakers.map((val) => {
          return (
            <div className="speakers-card">
              <img src={val.image} alt="" srcset=""className="avtr-img"/>
              <p><strong>{val.name}</strong></p>
              <p>{val.designation}</p>
            </div>
          );
        })}
      </div>
      </>}
      
      {compareDate(eventStartTime) ? (
        ""
      ) : isRSVP ? (
        <button>Already RSVPed</button>
      ) : (
        <button onClick={() => setmodal(true)}>RSVP</button>
      )}
    </div>
  );
};

export default RightCard;
