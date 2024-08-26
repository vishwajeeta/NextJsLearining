"use client"
import React from 'react'
import { submitAction } from '@/actions/form'
import { useRef } from 'react'

// import fs from "fs/promises"

// const submitAction=async(e)=>{
//   "use server"
//   console.log(e.get("name"),e.get("comment"))
//   fs.writeFile("contact.txt",`name:${e.get("name")},comment:${e.get("comment")}`)

// }

const page = () => {
  //it will clear the form once it's submited
  let ref=useRef()
  return (
    <div>
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' name='name' type='text'/>
        </div>
        <div>
          <label htmlFor='comment'>Comment:</label>
          <input id='comment' name='comment' type='text'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default page
