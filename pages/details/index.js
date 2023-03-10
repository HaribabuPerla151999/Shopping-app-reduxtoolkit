import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Link from 'next/link';
import { placeCart } from '@/Redux/Reducers/shoppongCartReducers';

function Deails() {
    const dispatch=useDispatch()
    const data=useSelector((state)=>state?.CartReducer?.cartValues)
    const totalAmount=useSelector((state)=>state?.CartReducer?.totalAmount);
    const totalCount=useSelector((state)=>state?.CartReducer?.cartValues.length)
    const handlePlaceOrder=()=>{
        dispatch(placeCart())
        if(totalCount<=0){
            alert("Please select product")
        }
    }
  return (
    <>
    <div className='bg-primary' style={{height:"100vh"}}>
    <h3 className='text-center text-warning text-decoration-underline'>Cart Item List</h3>
    <table className='table table-dark table-striped-columns mt-5'>
        <thead>
            <tr className='bg-warning'>
                <th>Product Name</th>
                <th>Product Cost</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map((item)=>
                   <tr>
                     <td>{item.productName}</td> 
                     <td>{item.productCost}</td> 
                   </tr>
                )
            }
           
        </tbody>
     </table>
     <div className='bg-dark p-2 text-center'>
         <h5 className='mt-5 text-warning'>Total Amount : {totalAmount}</h5>
         <Link href="/success">
            <button className='btn btn-warning' onClick={handlePlaceOrder}>Place order</button>
         </Link>
         </div>
     </div>
     </>
    
  )
}

export default Deails
