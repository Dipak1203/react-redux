import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze(
    {
        IDLE:'idle',
        ERROR:'error',
        LOADING:'loading'
    }
)



const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        setProduct(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
});

export const {setProduct,setStatus} = productSlice.actions;
export default productSlice.reducer;


/*
Thunks
The word ''thunk' is a programming term that means 'a piece of code that does some delayed work'.
Rather than execute some logic now, we can write a function body or code that can be used to perform
the work later.
*/

export function fetchProduct(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProduct(data));
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}