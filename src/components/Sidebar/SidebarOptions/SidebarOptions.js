import React from "react";
import classes from "./SidebarOptions.module.css";
import UploadButton from "../../UploadButton/UploadButton";

const SidebarOptions = (props) => {
    return (
        <div className={classes.Wrapper}>
            <ul>
                <li>Approved</li>
                <li>Rejected</li>
                <li>Waiting</li>
            </ul>
            <UploadButton/>
        </div>
    )
}

export default SidebarOptions;