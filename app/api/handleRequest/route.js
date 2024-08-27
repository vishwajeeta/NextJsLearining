import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const data = await fs.readFile("contact.txt","utf8")
        return NextResponse.json({sucess:true,data:"yes",data1:data})

        }catch(err){
          console.log(err)
        };
    
  }