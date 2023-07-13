import React, { createContext, useState } from 'react'
import { data } from '../Data/Data'

export const contextData = createContext()
const ContextWrapper = ({ children }) => {
  const { meetups } = data
  const [dataArr, setdataArr] = useState(meetups)
  const [dropDown, setdropDown] = useState("Both")
  const [inputField, setinputField] = useState("")

  const isPresentIntags = (array, str) => {
    const value = array.find((item) => item.toLowerCase().includes(str.toLowerCase()))
    return value
  }

  const dropDownFilter = dropDown === "Both" ? dataArr : dataArr.filter((item) => item.eventType === dropDown)

  const filterData = inputField ? dropDownFilter.filter((item) => item.title.toLowerCase().includes(inputField.toLowerCase()) || isPresentIntags(item.eventTags, inputField)) : dropDownFilter

  const handleSubmit = (id) =>{
    const array = dataArr.map((item) => item.id === id ? {...item, isRSVP : true} : item)
    setdataArr(array)
  }

  return (
    <contextData.Provider value={{ filterData, setdropDown, setinputField , inputField, dataArr, handleSubmit, dropDown}}>{children}</contextData.Provider>
  )
}

export default ContextWrapper