import React from 'react';
import { useSelector } from 'react-redux';


function Success() {
const totalAmount=useSelector((state)=>state.CartReducer.totalAmount)
  return (
    <div className='bg-dark text-white h-100'>
      <h1>{`Your Order is successfully placed for the Total Amount is ${totalAmount}`} </h1>
    </div>
  )
}

export default Success
