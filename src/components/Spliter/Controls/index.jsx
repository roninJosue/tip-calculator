import React from "react";
import styles from './../../styles/controls.module.scss'
import CustomInput from "./CustomInput";

const Controls = () => {
  return (
    <div className={styles.controls}>
      <CustomInput label={'Bill'}  inputId={'bill'} inputIcon={'dollar'}/>
      <CustomInput label={'Number of people'} inputId={'user'} inputIcon={'user'}/>
      <CustomInput label={'Number of people'} inputId={'user'} />
    </div>
  )
}

export default Controls