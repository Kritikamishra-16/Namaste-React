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
        </div>
    );
};

//we can just export default one thing
export default Header;