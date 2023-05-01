
import { configureStore } from '@reduxjs/toolkit';
import imagesSlice from '../slices/ImagesSlice';


export default configureStore({
    reducer:{
        images: imagesSlice,
    }
})

  
