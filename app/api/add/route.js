import { NextResponse } from "next/server";

//localhost:3000/api/add
export async function POST(request){
    // access the request data
    let data=await request.json()
    console.log(data)
    //re-send accessed and our data --just like in django
    return NextResponse.json({sucess:true,data:"yes",data1:data})
}