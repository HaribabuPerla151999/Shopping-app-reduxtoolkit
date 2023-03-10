import React from 'react';
import { useSelector } from 'react-redux';


function Success() {
const totalAmount=useSelector((state)=>state.CartReducer.totalAmount)
  return (
    <div className='bg-dark text-success' style={{height:"100vh"}}>
        <div className='d-flex flex-column align-content-end text-center justify-content-center h-100'>
            <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYNf3fG9j1mOh6kVE8P_g8G-kOAuXrLEdfQ&usqp=CAU" style={{height:"100px",width:"100px",borderRadius:"100%"}}/>
        </div>
      <h1>{`Your Order is successfully placed for the Total Amount is ${totalAmount}`} </h1>
      </div>
    </div>
  )
}

export default Success
