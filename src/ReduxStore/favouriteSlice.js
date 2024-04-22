import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: JSON.parse(localStorage.getItem('favourite')) || [],
}
export const FavouriteSlice = createSlice({
    name: "favouriteSlice",
    initialState,
    reducers: {

        addFav: (state, action) => {
            state.value.push(action.payload)
        },
        removeFav: (state, action) => {
            state.value.splice(action.payload, 1)
        }

    }
})

export const { addFav } = FavouriteSlice.actions
export const { removeFav } = FavouriteSlice.actions
export default FavouriteSlice.reducer