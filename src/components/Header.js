import { useState } from "react";

const Title= ()=>(
    <a href="/">
   <img className='logo'
   alt="logo" 
   src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" 
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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