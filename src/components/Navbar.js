
import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import classes from "./Navbar.module.css";
import {FirebaseContext} from "../utils/firebase";
import history from "../utils/history";

const NavBar = () => {

    const [isAuthenticated, setAuthenticated] = useState(false);
    const fb = useContext(FirebaseContext);
    useEffect(() => {
        console.log(isAuthenticated);
        console.log(fb.auth);
        const unsubscribe = fb.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthenticated(true)
            }
            else
                setAuthenticated(false);
            console.log(isAuthenticated);
        })

        return () => {
            unsubscribe();
        }
    });

    return (
        <div className={classes.Navbar}>
            {isAuthenticated && <button className="Button" onClick={() => {
                fb.auth.signOut();
                history.replace("/");
            }}>Log out</button>}
        </div>
    )
}

export default NavBar;