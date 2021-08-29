import React from "react";
import styles from './../../styles/controls.module.scss'
import CustomInput from "./CustomInput";
import ButtonsContainer from "../Buttons";

const Controls = () => {
  return (
    <div className={styles.controls}>
      <CustomInput label={'Bill'}  inputId={'bill'} inputIcon={'dollar'}/>
      <ButtonsContainer />
      <CustomInput label={'Number of people'} inputId={'user'} inputIcon={'user'}/>
    </div>
  )
}

export default Controls