import React from "react";
import styles from "./../../styles/controls.module.scss"

const CustomInput = (props) => {
  const {label, inputId} = props;
  return (
    <div className={styles.controlsInput}>
      <label htmlFor={inputId}>{label}</label>
      <input className={styles.controlsInputText} type="text" id={inputId}/>
    </div>
  )
}

export default CustomInput