import { createSlice} from "@reduxjs/toolkit";

const initialState={
    value:JSON.parse(localStorage.getItem("favourite"))||[]
}
 export const favouriteSlice=createSlice({
    name:'favourite',
    initialState,
    reducers:{
        addFav:(state,action)=>{
            state.value.push(action.payload)
        },
        removeFav:(state,action)=>{
            state.value.splice(action.payload,1)
        }
    }

})  



export const {addFav}=favouriteSlice.actions
export const {removeFav}=favouriteSlice.actions

export default  favouriteSlice.reducer;