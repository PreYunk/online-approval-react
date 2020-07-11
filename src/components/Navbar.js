
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import "../index.css";
import classes from "./Navbar.module.css";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className={classes.Navbar}>
            {isAuthenticated && <button className="Button" onClick={() => logout()}>Log out</button>}
        </div>
    )
}

export default NavBar;