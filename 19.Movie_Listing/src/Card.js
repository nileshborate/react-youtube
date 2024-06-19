import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img className="card_img" src={props.imgsrc} alt="image" />
        <div className='card_info'>
        <span className='card_category'>{props.cardCategory}</span>
        <h3 className='card_title'>{props.cardTitle}</h3>
        <a className='button' href={props.linkurl} target="_blank">Watch Now</a>
        </div>
    </div>
  )
}

export default Card