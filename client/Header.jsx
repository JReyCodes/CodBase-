import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div id="header">
            <div id="header-left">
                <Link to='/'><img id="codbase_logo" src="https://i.ibb.co/v4tnfNy/codbaselogo.png"></img></Link>
            </div>
            <div id="header-middle">
                <input id="searchbar" placeholder="Search Player Here"></input>
            </div>

            <div id="header-right">
                <img id="user-icon" src="https://i.ibb.co/LYpny7g/transparent-removebg-preview.png"></img>
            </div>
       </div>
    )
}

export default Header;