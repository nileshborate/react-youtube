import React, { useState } from 'react'

const Tour = (props) => {
   // console.log("Tour Props : ",props)
    const [readmore,setReadMore] = useState(false)
  const {id,image,info,name,price,removeTour} = props
  return (
    <article className='single-tour'>
        <img src={image} alt={name} className='img'/>
        <span className='tour-price'>${price}</span>
        <div className='tour-info'>
            <h5>{name}</h5>
            <p>
                {readmore ? info :`${info.substring(0,200)}...`}
                <button className='info-btn' onClick={()=>setReadMore(!readmore)}>
                    {readmore ? 'show less' : 'read more'}
                </button>
            </p>
            <button className='delete-btn btn-block btn' onClick={()=>removeTour(id)}>
                Not Inrested
            </button>
        </div>
    </article>
  )
}

export default Tour