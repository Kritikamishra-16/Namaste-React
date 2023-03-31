//THIS SLICE SHOULD BE PUT INSIDE STORE
import { createSlice } from "@reduxjs/toolkit"

//function
const cartSlice= createSlice({ 
    name: 'cart',
    initialState:{
        //initially our cart is empty
        items: [],
    },
    //we need reduces to update our cartSlice
    //these reduces are called on dispatch of an action

    reducers: {        
        //mapping between action {addItem} and reducer function
        //state->previous State
        //action payload-> here we get the items which we need to add in our cart
        //the payload is the data that your reducer will use to update the state.
        
        addItem: (state, action)=>{
            //modifying the state
            state.items.push(action.payload);
            //neverreturn anything from here
        },

        removeItem:(state,action)=>{
            const idx=state.items.indexOf(action.payload);
            if(idx>-1)
            {
                state.items.splice(idx,1);
            }
        },
        clearCart:(state)=>{
            state.items=[];
        }
    },

});

//it is at the end of the day cartSlice is an object

/*cartSlice={
    actions:{
        addItem,
        removeItem, 
        clearCart
    },
    reducer:{
        reducers
    }

}*/

//export by name as there are bunch of actions
export const {addItem, removeItem, clearCart}=cartSlice.actions;

//it combine all these reduces into one reducer
export default cartSlice.reducer;

