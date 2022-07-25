import React from "react";
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import IconButton  from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';
import Chatroom from "./Chatroom";

//will return two temporary icons at the top of the page but are not functional
const Header = () => {
    return (
        <div className="Header">
                <IconButton>
                    <Link to="/profile">
                        <PersonIcon fontSize="large" className="header_icon"/>
                    </Link>
                </IconButton>
                    <Link to="/matches">
                        <img className="header_logo" src="logo512.png" alt="header"/>
                    </Link>
                <IconButton>
                    <Link to="/chat">
                        <ForumIcon fontSize="large" className="header_icon"/>
                    </Link>
                </IconButton>
        </div>
    )
}

export default Header