import React from 'react'

const page = ({params}) => {
  return (
    <div>
    {params.hello=="hii"?"hello":""}
      Hello page
    </div>
  )
}

export default page
