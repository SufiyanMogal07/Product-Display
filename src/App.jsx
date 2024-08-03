import { useState,useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'

function App() {
 const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=20')
    .then(res=>res.json())
    .then(json=> setData(json))
  }, [])
  
  return (
    <>
      <Navbar/>
      <div className='container'>
        {data.map((value)=>{
          return <Card key={value.id} props={value}/>
        })}
      </div>
    </>
  )
}

export default App
