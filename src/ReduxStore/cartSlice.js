
import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    value:[]
}

export const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state,action)=>{
state.value.push(action.payload)
        },
        addAmount:(state,action)=>{

state.value.length>0 ? state.value.forEach((item)=> item.product.id === (action.payload.ind)?(console.log(item.product.id),
item.amount++)
:state.value.push(action.payload.new) )
 :state.value.push(action.payload.new) 



            // state.value.filter((item=> item.product.id===(action.payload)).forEach(item=>item.amount++) )
        }
    }
})


export const {addCart}= cartSlice.actions
export const {addAmount}= cartSlice.actions

export default cartSlice.reducer