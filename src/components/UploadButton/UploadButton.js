import React, { useState, useRef } from "react"
import classes from "./UploadButton.module.css";




const UploadButton = (props) => {

    const inputRef = useRef();
    const handlePicker = (e) => {
        inputRef.current.click();
        console.log("h")
    }

    return (
        <>
            <div onClick={handlePicker} className={classes.UploadButton}>
                Create Application
            </div>
            <input onChange={(inp) => props.uploadHandler(inputRef.current.files[0])} ref={inputRef} type="file" accept="application/pdf" style={{ display: "none" }} />
        </>
    )
}

export default UploadButton;

