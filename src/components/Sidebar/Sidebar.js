import React from "react";
import classes from "./Sidebar.module.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";


const Sidebar = (props) => {
    return (
        <div className={classes.Wrapper}>
            <h2>Application Approval</h2>
            <SidebarOptions uploadHandler={(file) => props.uploadHandler(file)}/>
        </div>
    )
}

export default Sidebar;