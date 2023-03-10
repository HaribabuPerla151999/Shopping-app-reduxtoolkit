import { createSlice} from "@reduxjs/toolkit";

const initialState={
    cartValues:[],
    totalAmount:0
}

const cartReducers=createSlice({
    name:"Cart Reducer",
    initialState,
    reducers:{
    incrementCart:(state,action)=>{
        state?.cartValues?.push(action.payload)
        const amount=(state?.cartValues?.map(item=>item.productCost))
        state.totalAmount=amount.reduce((prev,now)=>prev+now)
    },
    decrementCart:(state,action)=>{
        const amount=(state?.cartValues?.map(item=>item.productCost))
        const index=state.cartValues.findIndex(item=>item.productName==action.payload.productName)
       
        
        const productTitle=action.payload.productName
       
        if(state.cartValues.length>0){
        if(index> -1){
        state.cartValues.splice(index,1)
       
        state.totalAmount-=action.payload.productCost
        
       
        
        alert("Product Removed Successfully")
        }
        else{
            alert(`Already You removed ${productTitle} from the cart`)
        }
      }else{
        alert(`Your Cart is empty`)
      }
      console.log(state.totalAmount,"ttt",action.payload.productCost,amount)
      
    },
    placeCart:(state,action)=>{
        state.cartValues=[]
        state.totalAmount=0
    },
    
  }
})
export const {incrementCart,decrementCart,placeCart}=cartReducers.actions
export default cartReducers.reducer