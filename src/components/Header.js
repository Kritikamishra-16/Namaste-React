import { useState, useContext } from "react";
import Logo from "../assets/img/foodVilla.jpg"
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"; //we need to extract the exact contect we want to use
import { useSelector } from "react-redux";


const Title= ()=>(
    <a href="/">
   <img className="h-28 p-2"
   alt="logo" 
   src= {Logo}
   />
   </a>
);


//Default Export
const Header=()=>{

    const cartItems=useSelector(store => store.cart.items);
    {console.log(cartItems)}
    //toggle login button
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline= useOnline();

    //passing the context "userContext" to  access it
    const {user}= useContext(UserContext); 

    //const [getLocalVariables, setLocalVariables]= useLocalStorage();
    //const localStoranpge= useLocalStorage();

    return (

        <div className='flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-100'>
            <Title/>
            <div className="nav-items"> 
                <ul className="flex py-10">
                    <li className="px-2"><Link to='/'>Home</Link></li>
                    <li className="px-2"><Link to='/about'>About</Link></li>
                    <li className="px-2"><Link to='/contact'>Contact</Link></li>
                    <li className="px-2"><Link to='/instamart'>Instamart</Link></li>
                    <li className="px-2"><Link to='/cart'>Cart- {cartItems.length} items</Link></li>
                </ul>
            </div>
            <h1>{isOnline? "🟢":"🔴"}</h1>
            <span className="p-10 font-bold text-red-400">{user.name}</span>
            {
                //JS Expressions & Statement
                //only js expressions work over here
                (isLoggedIn
                    ?(<button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> )
                    : (<button onClick={()=>{setIsLoggedIn(true)}}>Login</button>) )
            }
        </div>
    );
};

//we can just export default one thing
export default Header;