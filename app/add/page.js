"use client"
import React from "react";

//localhost:3000/add
const page = () => {
  const handleClick = async () => {

    //create the data to be requested or send to api route
    let data={
        name:"vishwa"
    }

    //fetch data from api creaded in api folder
    let a = await fetch("/api/add", {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      
      body:JSON.stringify(data) //data is added to  be sent as request to api route
    });
    let res = await a.json(); //waiting for response from api/add end-point
    console.log(res);
  };
  return (
    <div>
      <h1 className={"text-xl font-bold"}>Next.js Api route demo</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default page;
