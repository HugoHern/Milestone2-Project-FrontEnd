import React from "react";
import './Header.css'
import { Link } from "react-router-dom"; 

//will return two temporary icons at the top of the page but are not functional
const Header = () => {
    return (
        <div className="Header">
                
                    <Link to="/profile">
                    <img className="header_logo" src="profile.png" alt="header"/>
                    </Link>
                
                    <Link to="/matches">
                        <img className="header_logo" src="logo512.png" alt="header"/>
                    </Link>
                
                    <Link to="/chat">
                    <img className="header_logo" src="icon.webp" alt="header"/>
                    </Link>
                
        </div>
    )
}

export default Header