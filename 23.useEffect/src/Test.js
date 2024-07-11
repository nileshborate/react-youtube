import React, { useEffect, useState } from 'react'

const Test = () => {
    const [cnt,setCnt] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCnt(cnt + 1)
        },1000)
    },[])
    return (
        <h1>Counter : {cnt}</h1>
    )
}

export default Test