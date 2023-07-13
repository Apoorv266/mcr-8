import React, { useContext } from 'react'
import "../Style/Navbar.css"
import { contextData } from '../Context/ContextWrapper'

const SearchBar = () => {
  const { setdropDown } = useContext(contextData)
  return (
    <div className='filter-main'>
      <h1>Meetup events</h1>
      <select onChange={(e) => setdropDown(e.target.value)} value={"default"}>
      <option disabled value={'default'}>Search event type</option>
        <option value="Both">Both</option>
        <option value="Offline">Offline</option>
        <option value="Online">Online</option>
      </select>
    </div>
  )
}

export default SearchBar