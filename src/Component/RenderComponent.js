import React from "react";
import "../Style/Home.css";
import { Link } from "react-router-dom";
import { getDateTimeFunc } from "../Utils/UtilFunc";

const RenderComponent = ({item}) => {
  return (
    <>
    <Link style={{textDecoration: "none", color: "black"}} to={`/event/${item.id}`}>
    <div className="card-main" key={item.id}>
      <img
        src={item.eventThumbnail}
        alt=""
        srcSet=""
        className="card-img"
      />
      <div className="time-card">
      <p>{getDateTimeFunc(item.eventStartTime).day}</p>
      <p>{getDateTimeFunc(item.eventStartTime).date}</p>
      <p>{getDateTimeFunc(item.eventStartTime).time} IST</p>
      </div>
    
      <h2>{item.title}</h2>
      <div className="event-type">
        <p>{item.eventType}</p>
      </div>
    </div>
    </Link>
    </>
  );
};

export default RenderComponent;
