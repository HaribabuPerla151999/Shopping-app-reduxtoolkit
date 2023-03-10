import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { placeCart } from '@/Redux/Reducers/shoppongCartReducers';
import Link from 'next/link';

function navbar() {
    const dispatch=useDispatch()
    const totalCount=useSelector((state)=>state.CartReducer.cartValues.length)
    const totalAmount=useSelector((state)=>state.CartReducer.totalAmount)
    const placePage=useSelector((state)=>state.CartReducer.placePage)
    
    const handlePlaceBtn=()=>{
        dispatch(placeCart())
        if(totalCount<=0){
            alert("Please select product")
        }
       
    }
  return (
    <div className='bg-dark p-3 d-flex flex-row justify-content-center'>
         <Link href="/details">
        <button className='btn btn-primary me-1'>TotalItems:{totalCount}</button>
        </Link>
        {/* <button className='btn btn-success me-1'>Total Amount : {totalAmount}</button> */}
        <Link href="/success">
          <button className='btn btn-warning' onClick={handlePlaceBtn}>Place order</button>
          </Link>
        
      
    </div>
  )
}

export default navbar
