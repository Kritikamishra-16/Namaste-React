import { useSelector,useDispatch } from "react-redux";
import FoodItem from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const dispatch = useDispatch();
    const handleClearCart=()=>{
        //this function will dispatch an action
        dispatch(clearCart());
    };

    //MAJOR PERFORMANT IMPROVEMENT
    //here we need to subscribe to the specific portion of the store that we want in our component
    const cartItems= useSelector(store=>store.cart.items);
    return (
        <div>
            <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
            <button className="bg-green-100 p-2 m-5"
            onClick={()=>{
                handleClearCart();
            }}
            >Clear Cart</button>
            <div className="flex flex-wrap"> 
            {
                cartItems.map(item=>(
                    <FoodItem {...item} key={item.id} ></FoodItem>
                ))
            }
            </div>
        </div>
    )
}
export default Cart;