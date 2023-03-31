import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";


const store= configureStore({
    //Slices needs to be here
    reducer:{
        //Name of slice : the slice
        
        cart: cartSlice,
    }
});
console.log(cartSlice);
export default store ;  