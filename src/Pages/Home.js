import React, { useContext } from 'react'
import "../Style/Home.css"

import Navbar from '../Component/Navbar'
import SearchBar from '../Component/SearchBar'
import RenderComponent from '../Component/RenderComponent'
import { contextData } from '../Context/ContextWrapper'


const Home = () => {
  const {filterData} = useContext(contextData)
  return (
    <>
      <Navbar />
      <SearchBar />
      {filterData.length > 0 ? <div className='card-wrapper'>
        {filterData?.map((item) =>  <RenderComponent item={item} key={item.id}/> )}
      </div> : <h1>No data !</h1>}
    </>
  )
}

export default Home