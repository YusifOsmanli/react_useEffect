import React from 'react'

function Item({item,handleDelete}) {
  return (
    <div>
       <tr>
             <td>{item.id}</td>
             <td>{item.name}</td>
            <td>{item.unitPrice}</td>
           <td>{item.unitsInStock}</td>
            <td><button onClick={()=>handleDelete(item.id)}>delete</button></td>
       </tr>
    </div>
  )
}

export default Item
