import { useState } from "react";

const isLoggedIn = () =>{
    // Here can i call to check Aunthenication
    return true;
}
const Title=() => {

    <a href="/">
        <img
        className="logo"
        alt="logo"
        src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
        
        />
    </a>
    };
    
    
    const Header= () =>{
        const [isLoggedIn, setLoggedIn]=useState(false)
        return(
    <div className="header">
        <title/>
        
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {isLoggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
           
        
        
        
    </div>
    
        );
    };
    export default Header;