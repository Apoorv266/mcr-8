import React, { useContext } from 'react'
import "../Style/Navbar.css"
import { contextData } from '../Context/ContextWrapper'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const {setinputField,inputField} = useContext(contextData)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    navigate("/")
    setinputField(e.target.value)
  }

  return (
    <div className='nav-main'>
        <img src={"https://1000logos.net/wp-content/uploads/2021/05/Meetup-logo.png"} alt="" srcSet="" width={"200px"}/>

        <div>
        <input type="text" value={inputField} onChange={handleSearch} placeholder='search by title or tags!'/>
        </div>
    </div>
  )
}

export default Navbar