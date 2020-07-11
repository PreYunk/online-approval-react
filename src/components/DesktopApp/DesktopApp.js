import React, { useState, useEffect } from "react";

import classes from "./DesktopApp.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Pdf from "../Pdf/Pdf";
import NavBar from "../Navbar";
import { auth0api } from "../../utils/axiosUtil";

const DesktopApp = (props) => {

    const [pdf, setPdf] = useState(null);

    const uploadHandler = (file) => {
        file.arrayBuffer()
            .then(res => {
                console.log(res);
                const pdfArr = new Uint8Array(res);
                console.log(pdfArr);
                setPdf(pdfArr);
            })
    }

    useEffect(() => {
        auth0api.get('api/v2/users').then(res => console.log(res)).catch(err => console.log(err));
    })

    return (
        <>
            <NavBar />
            <div className={classes.Wrapper}>
                <Sidebar uploadHandler={(file) => uploadHandler(file)} />
                <div className={classes.MainArea}>
                    <Pdf
                        file={pdf}
                    />
                </div>
            </div>
        </>
    )
}

export default DesktopApp;