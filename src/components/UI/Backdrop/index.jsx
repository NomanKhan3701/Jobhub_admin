import React from "react";
import styles from "./Backdrop.module.scss";

const backdrop = (props) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.removeBackdrop}></div>
  ) : null;
};

export default backdrop;
