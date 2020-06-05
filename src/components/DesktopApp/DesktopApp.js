import React from "react";

import classes from "./DesktopApp.module.css";
import Sidebar from "../Sidebar/Sidebar";

const DesktopApp = (props) => {
    return (
        <div className={classes.Wrapper}>
            <Sidebar/>
        </div>
    )
}

export default DesktopApp;