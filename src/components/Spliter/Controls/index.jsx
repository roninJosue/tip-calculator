import React from "react";
import styles from './../../styles/controls.module.scss'
import CustomInput from "./CustomInput";

const Controls = () => {
  return (
    <div className={styles.controls}>
      <CustomInput label={'Bill'} text={'Hola'} inputId={'bill'} />
    </div>
  )
}

export default Controls