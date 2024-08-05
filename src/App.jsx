import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CartList from "./components/CartList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/products/productSlicer";
import { statuses } from "./features/products/productSlicer";
import "./App.css";

function App() {
  const {data,status} = useSelector(state=> state.product)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if(status===statuses.LOADING) {
    return <h2 className="text-center">loading...</h2>
  }

  if(status===statuses.ERROR) {
    return <h2 className="text-center red">SOMETHING WENT WRONG ERROR!!!</h2>
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {data.map((value) => {
          return <Card key={value.id} props={value} />;
        })}
        <CartList />
      </div>
    </>
  );
}

export default App;
