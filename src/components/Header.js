import { useState } from "react";
import Logo from "../assets/img/foodVilla.jpg"
import {Link} from "react-router-dom"

const Title= ()=>(
    <a href="/">
   <img className='logo'
   alt="logo" 
   src= {Logo}
   />
   </a>
);


//Default Export
const Header=()=>{
    //toggle login button
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='header'>
            <Title/>
            <div className="nav-items"> 
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </div>
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