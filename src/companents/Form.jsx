// import React from 'react'
import React, {useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

function Form({setdata,data}) {
  const [newProduct,setNewProducts]=useState({name:"",unitPrice:"",unittdInStock:""})
  
  const handlechange=(e)=>{
    let addProduct={...newProduct,[e.target.name]:e.target.value}
    console.log(addProduct)
    setNewProducts(addProduct)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    newProduct.id=uuidv4()
    axios.post("https://northwind.vercel.app/api/products",newProduct)
    setdata([...data,newProduct])
  }
  return (
    <div className='form'>
     
      <input type="text" name='name' placeholder='name' onChange={(e)=>handlechange(e)}/>
      <input type="text" name='unitPrice' placeholder='unitPrice' onChange={(e)=>handlechange(e)}/>
      <input type="text" name='unitInStock' placeholder='unitInStock' onChange={(e)=>handlechange(e)} />
      <button onClick={handleSubmit}>add</button>
    </div>
  )
}

export default Form
