import React from "react"
import styles from "./../../styles/controls.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDollarSign, faUser} from "@fortawesome/free-solid-svg-icons"

const CustomInput = (props) => {
  const {label, inputId, inputIcon} = props;
  return (
    <div className={styles.controlsInput}>
      <label className={styles.controlsLabel} htmlFor={inputId}>{label}</label>
      <div className={styles.controlsGroup}>
        {
          inputIcon && <FontAwesomeIcon className={styles.controlsInputIcon}
                                        icon={(inputIcon === 'dollar') ? faDollarSign : faUser}/>
        }
        <input className={styles.controlsInputText} type="text" id={inputId}/>
      </div>
    </div>
  )
}

export default CustomInput