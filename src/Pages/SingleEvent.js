import React, { useContext, useState } from 'react'
import Navbar from '../Component/Navbar'
import LeftCard from '../Component/LeftCard'
import RightCard from '../Component/RightCard'
import "../Style/SingleEvent.css"
import { Link, useParams } from 'react-router-dom'
import { contextData } from '../Context/ContextWrapper'
import Modal from '../Component/Modal'

const SingleEvent = () => {
    const {eventId} = useParams()
    const {dataArr} = useContext(contextData)

    const eventObj =  dataArr?.find((item) => item.id === eventId)
    const [modal, setmodal] = useState(false)
  const  {isPaid, id} = eventObj
    return (
        <>
    
            <div>
                <Navbar />
                <Link to={"/"}><button>Return</button></Link>
                <div className='event-main'>
                    <LeftCard eventObj={eventObj}/>
                    <RightCard eventObj={eventObj} setmodal={setmodal}/>
                </div>
            </div>
            {modal && <Modal setmodal={setmodal} id={id} isPaid={isPaid}/>}
        </>
    )
}

export default SingleEvent