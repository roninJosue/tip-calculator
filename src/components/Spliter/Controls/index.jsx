import React from "react";
import styles from './../../styles/controls.module.scss'
import CustomInput from "./CustomInput";
import ButtonsContainer from "../Buttons";
import useStore from "../../store/store";

const Controls = () => {
  const bill = useStore((state) => state.bill)
  const updateBill = useStore((state) => state.updateBill)

  return (
    <div className={styles.controls}>
      <CustomInput upd={updateBill} value={bill} label={'Bill'}  inputId={'bill'} inputIcon={'dollar'}/>
      <ButtonsContainer />
      <CustomInput label={'Number of people'} inputId={'user'} inputIcon={'user'}/>
    </div>
  )
}

export default Controls