import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item';
import Form from './Form';
function List() {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://northwind.vercel.app/api/products").then(res=>{
            console.log(res.data)
            setdata(res.data);
        });
    },[]);

    const handleDelete =(prod) =>{
        let target= data.find(ali=>ali.id==prod)
        let indexOfTarget=data.indexOf(target)
        data.splice(indexOfTarget, 1)
        setdata([...data])
        
    }
  return (
    <>
      <Form data={data} setdata={setdata}/>
      <table>
        {/* <thead>
            <tr>
                <th className='id'>id</th>
                <th>name</th>
                <th>unitPrice</th>
                <th>unitsInStock</th>
                <th>delete</th>
            </tr>
        </thead>  */}
        <tbody>
            {
                data.map((item)=>{
                    return  <Item key={Item.id} item={item} data={data} handleDelete={handleDelete} />
                })
            }
       
        
        </tbody>
      </table>
    </>
  )
}

export default List
