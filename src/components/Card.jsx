import React from 'react'
import "./Card.css"

const Card = ({props}) => {
  function trimSubstring(val) {
    if(val.length>=58) {
      val = val.substring(0,40) + "...."
      return val
    }
    return val
  }
  return (
    <div className="card">
      <img className='card-img' src={`${props.image}`} alt="product-imgs"/>
      <div className="card-content">
        <h3>{trimSubstring(props.title)}</h3>
        <p>${props.price}</p>
      </div>
    </div>
  )
}

export default Card
