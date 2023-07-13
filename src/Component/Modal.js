import React, { useContext } from "react";
import "../Style/Modal.css";
import { contextData } from "../Context/ContextWrapper";

const Modal = ({ setmodal, id , isPaid}) => {

  const {handleSubmit} = useContext(contextData)
  const handleClick = () =>{
    setmodal(false)
    handleSubmit(id)
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setmodal(false)}>
          X
        </span>
        <div className="form-content">
          <p>Name:</p>
          <input type="text" placeholder="enter name!"/>
          <p>Email:</p>
          <input type="text" placeholder="enter email!"/>
          {isPaid && <p>You have to make payment at the event*</p>}
          <button onClick={handleClick}>RSVP</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
