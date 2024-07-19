import React, { useState} from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const err = useRouteError();
    const [error,setError]= useState(err)
    
    console.log(error)
  return (
    <div>Oops! Something went wrong
        <h1>{error.data}</h1>
        <h1>{error.status}</h1>
    </div>
  )
}

export default Error