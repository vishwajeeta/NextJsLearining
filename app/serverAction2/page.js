"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    let [mydata,setMydata]=useState({})

const handle=async()=>{
    try{
    let a=await fetch("/api/handleRequest")
    let data=await a.json()
    console.log(data)
    
    setMydata(data)
    }catch (error){
        console.error("Error fetching data:",error)
    }
}
  return (
    <div>
      <button onClick={handle}>Handle request</button>
      <h1>Data:{JSON.stringify(mydata,null,2)}</h1>
      <h2>Data1: {mydata.sucess}</h2>
      <h2>Data: {mydata.data}</h2>
      <h2>Data1: {mydata.data1}</h2>
      
    </div>
  )
}

export default page
