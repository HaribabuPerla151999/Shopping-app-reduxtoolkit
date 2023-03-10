import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { placeCart } from '@/Redux/Reducers/shoppongCartReducers';

function navbar() {
    const dispatch=useDispatch()
    const totalCount=useSelector((state)=>state.CartReducer.cartValues.length)
    const totalAmount=useSelector((state)=>state.CartReducer.totalAmount)
    const placePage=useSelector((state)=>state.CartReducer.placePage)
    
    const handlePlaceBtn=()=>{
        dispatch(placeCart())
        if(totalCount>0){
            alert(`Your order is placed,Product will be deliver on 15-04-2023 `)
        }else{
            alert("Please select product")
        }
       
    }
  return (
    <div className='bg-dark p-3 d-flex flex-row justify-content-center'>
        <button className='btn btn-primary me-1'>TotalItems:{totalCount}</button>
        <button className='btn btn-success me-1'>Total Amount : {totalAmount}</button>
        {
          placePage != 1 &&
          <button className='btn btn-warning' onClick={handlePlaceBtn}>Place order</button>
        }
        
      
    </div>
  )
}

export default navbar
