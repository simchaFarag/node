import { createSlice } from "@reduxjs/toolkit"
import getImages from "../API/Api";

const initialState={
    query: { page : 1, per_page : 9, category : ""},
    data: [],
    hasPrevious: false,
    hasNext: false,
    isLoading: false,   
}


export function selectData(store){
    return store.images.data
}

export function selectQuery(store) {
    return store.images.query;
}

export function selectAllState(store){
    return store.images
}


export const imagesSlice =createSlice({
    name:'images',
    initialState,
    reducers : {
        loading :(state ,action) =>{
            state.isLoading = true
        },
        setData : (state ,action )=> {
            Object.assign(state, action.payload);
        },
    }
})
export const {loading, setData} =imagesSlice.actions;


export const fetchAndSet= (query) =>async (dispatch)=>{
    dispatch(loading());
    const data = await getImages(query);
    dispatch(setData({query, ...data, isLoading: false}))
}

export default imagesSlice.reducer
