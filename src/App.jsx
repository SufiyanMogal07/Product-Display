import { useState,useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CartList from './components/CartList'
import './App.css'

function App() {
 const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=20')
    .then(res=>res.json())
    .then(json=> setData(json))
  }, [])

  // useEffect(()=> {
  //   if(data.length!=0) {
  //     console.log(data)
  //   }
  // }, [data])
  
  return (
    <>
      <Navbar/>
      <div className='container'>
        {data.map((value)=>{
          return <Card key={value.id} props={value}/>
        })}
        <CartList/>
      </div>
    </>
  )
}

export default App
