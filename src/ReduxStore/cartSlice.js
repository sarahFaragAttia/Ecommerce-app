
import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    value:JSON.parse(localStorage.getItem('cart')) || []
}

export const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem :(state,action)=>{
state.value.push(action.payload)
        },
        addAmount:(state,action)=>{
            state.value.forEach(item=> item.id ===action.payload.index && (item.amount+=action.payload.No))
        },
        removeItem:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        decAmount:(state,action)=>{
            state.value.forEach(item=>item.id===action.payload.index &&(item.amount-=action.payload.No) )
        }

    }
})


export const {addItem}= cartSlice.actions
export const {addAmount}= cartSlice.actions
export const {removeItem}= cartSlice.actions
export const {decAmount}= cartSlice.actions

export default cartSlice.reducer