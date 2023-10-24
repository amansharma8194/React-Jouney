import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/amansharma8194')
        .then(resp => resp.json())
        .then(resp => setData(resp))
    },[])
  return (
    <div>
      <h1>Public Respositories : {data.public_repos}</h1>
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
