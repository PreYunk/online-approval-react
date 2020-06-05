
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Login</button>
            )}
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </span>
            )}
            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
    )
}

export default NavBar;