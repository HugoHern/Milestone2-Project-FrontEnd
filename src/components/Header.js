import React from "react";
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton  from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum'

//will return two temporary icons at the top of the page but are not functional
const Header = () => {
    return (
        <div className="Header">
                <IconButton>
                    <PersonIcon fontSize="large" className="header_icon"/>
                </IconButton>
                <img className="header_logo" src="logo192.png" alt="header"/>
                <IconButton>
                    <ForumIcon fontSize="large" className="header_icon"/>
                </IconButton>
        </div>
    )
}

export default Header