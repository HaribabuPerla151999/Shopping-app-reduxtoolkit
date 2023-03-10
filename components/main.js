import React from 'react';
import Data from "./jsondata"
import { useDispatch } from 'react-redux';
import  { incrementCart,decrementCart } from "../Redux/Reducers/shoppongCartReducers"

console.log("data",Data)

function main() {
    const dispatch=useDispatch()

    const handleAddToCart=(item)=>{
        dispatch(incrementCart({
            productName:item?.title,
            productCost:item?.cost
        }))
    }
    const handleRemoveFromCart=(item)=>{
        dispatch(decrementCart({
            productName:item?.title,
            productCost:item?.cost
        }))
    }
  return (
    <div className='container-fluid bg-primary'>
        <div className='row align-items-start'>
        <h1 className='text-center text-decoration-underline text-warning w-100'>List of Mobiles</h1>
            
                
                {
                 Data.map(item =>
                    <div className='col-12 col-md-4'>
          
                     <div className='card mt-5 '>
                        <div className='card-head bg-warning text-center'>
                            <img src={item.pic} className="img-fluid" style={{height:"150px",width:"200px",borderRadius:"50px"}}/>
                        </div>
                        <div className='card-body bg-dark text-warning'>
                            <h4>Name : {item.title}</h4>
                            <h4>Cost : ₹ {item.cost}</h4>
                        </div>
                        <div className='card-footer text-center bg-dark'>
                          <button className='btn btn-primary me-1' onClick={()=>handleAddToCart(item)}>Add to cart</button>
                           <button className='btn btn-primary me-1' onClick={()=>handleRemoveFromCart(item)}>Remove from card</button>
                      </div>
                     </div>
                     </div>

                    
                    )
                }

           
        </div>


    </div>
  )
}

export default main
