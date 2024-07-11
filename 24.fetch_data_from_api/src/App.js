import React, { useEffect, useState } from 'react'

const App = () => {
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)
  const [isError,setIsError] = useState(false)

  const url = "https://api.github.com/users"

  const fetchData = async() => {
    try{
      const response = await fetch(url)
      //console.log(response)
      if(!response.ok){
        setIsError(true)
        setLoading(false)
        return
      }
      const users = await response.json()
      console.log(users)
      setUsers(users)
      setLoading(false)
    }catch(error){
      console.log("error : ",error)
      setIsError(true)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  if(loading){
    return <h2>Loading.....</h2>
  }
  if(isError){
    return <h2>There was some Error.....</h2>
  }
  return (
    <>
      <ul>
      {
        users.map((obj) => {
          const { id,login,avatar_url,html_url } = obj
          return(
            <li key={id} style={{border:"1px solid gray"}}>
              <img style={{width:"80px"}} src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })
      }
      </ul>
    </>
  )
}

export default App
