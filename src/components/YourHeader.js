import React from "react";
import './Header.css'
import { Link } from "react-router-dom"; 

//will return two temporary icons at the top of the page but are not functional
const YourHeader = () => {
    return (
        <div className="yourHeader">
            <Link to="/profile">
                <h2>View</h2>
            </Link>
            <Link to="/edit">
                <h2>Edit</h2>
            </Link>
        </div>
    )
}

export default YourHeader