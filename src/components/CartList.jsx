import React from "react";
import { useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/products/cartSlicer";
import "./CartList.css";

function CartList() {
  const cartData = useSelector((state) => state.cart);
  const slider = useRef(null)
  const dispatch = useDispatch()


  function trimSubstring(val) {
    if(val.length>=30) {
      val = val.substring(0,25) + "...."
      return val
    }
    return val
  }

  const openSlide = () => {
    slider.current.style.display = "block";
  }

  const closeSlide = () => {
    slider.current.style.display = "none";
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <>
      <div ref={slider} className="cart-container">
          <button onClick={closeSlide} className="close-btn">
            <IoClose />
          </button>
        <div className="cart-items">
          <h2>Cart Items:</h2>
          {cartData.map((product) => {
            return <div key={product.id} className="cart-elem">
              <img src={product.image} alt="" />
              <h4 className="cart-title">{trimSubstring(product.title)}</h4>
              <h4 className="cart-price">${product.price}</h4>
              <button onClick={() => handleRemove(product.id)} className="remove-btn">Remove</button>
            </div>;
          })}
        </div>
      </div>
      <button onClick={openSlide} className="cart-btn">
        <FaShoppingCart />
      </button>
    </>
  );
}

export default CartList;
