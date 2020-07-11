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
                <li>Received</li>
            </ul>
            <UploadButton uploadHandler={(file) => props.uploadHandler(file)}/>
        </div>
    )
}

export default SidebarOptions;