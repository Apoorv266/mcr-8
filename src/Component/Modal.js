import React, { useContext, useState } from "react";
import "../Style/Modal.css";
import { contextData } from "../Context/ContextWrapper";

const Modal = ({ setmodal, id , isPaid}) => {

  const {handleSubmit} = useContext(contextData)
const [formInput, setformInput] = useState({
  name: "", 
  email : ""
})

const isFieldEmpty = () =>{
  return Object.values(formInput).includes("")
}
  const handleClick = () =>{
    if (!isFieldEmpty()) {
      setmodal(false)
      handleSubmit(id)
    }
  }

  const onChangeInput = (e) =>{
    setformInput({...formInput, [e.target.name] : e.target.value})
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setmodal(false)}>
          X
        </span>
        <div className="form-content">
          <p>Name:</p>
          <input type="text" placeholder="enter name!" value={formInput.name} name="name" onChange={onChangeInput}/>
          <p>Email:</p>
          <input type="text" placeholder="enter email!" value={formInput.email} name="email" onChange={onChangeInput}/>
          {isPaid && <p>You have to make payment at the event*</p>}
          <button onClick={handleClick}>RSVP</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
