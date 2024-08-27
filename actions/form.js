"use server"
import fs from "fs"

export const submitAction=async(e)=>{
    console.log(e.get("name"),e.get("comment"))
    // fs.writeFile("contact.txt",`name:${e.get("name")},comment:${e.get("comment")}`)
    // it will update file without overwriting
    fs.appendFileSync("contact.txt",`[ name= ${e.get("name")} -- comment= ${e.get("comment")} ],`)

  }