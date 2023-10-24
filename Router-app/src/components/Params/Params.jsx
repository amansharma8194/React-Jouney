import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {userid} = useParams()
  return (
    <div>
      <h1>Params: {userid} </h1>
    </div>
  )
}

export default Params
