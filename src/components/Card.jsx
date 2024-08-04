import React from 'react'
import "./Card.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/products/cartSlicer';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({props}) => {
  const dispatch = useDispatch()

  function trimSubstring(val) {
    if(val.length>=35) {
      val = val.substring(0,30) + "...."
      return val
    }
    return val
  }
  const handleAdd = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="card">
      <img className='card-img' src={`${props.image}`} alt="product-imgs"/>
      <div className="card-content">
        <h3>{trimSubstring(props.title)}</h3>
        <p>${props.price}</p>
        <button onClick={()=> handleAdd(props)} className='card-btn'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
