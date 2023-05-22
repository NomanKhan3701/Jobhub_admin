import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import Backdrop from "../Backdrop/index";

const Modal = ({
    uploadPreview = null,
    show = null,
    children = null,
    style = null,
    hideBackdrop = null,
    className = null,
    name = null,
}) => {
    return (

        <React.Fragment>
            <Backdrop show={show} removeBackdrop={hideBackdrop} />
            <div
                className={`${styles.Modal} ${show ? styles.active : ""} ${className ? className : ""}}`}
                style={{ ...style }}
            >
                {children}
            </div>
        </React.Fragment >

    );
};

export default React.memo(Modal);