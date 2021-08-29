import React from "react";
import styles from './../../styles/controls.module.scss'
import CustomInput from "./CustomInput"
import ButtonsContainer from "../Buttons"
import useStore from "../../store/store"

const Controls = () => {
  const bill = useStore((state) => state.bill)
  const percentage = useStore((state) => state.tipPercentage)
  const people = useStore((state) => state.people)
  const updateBill = useStore((state) => state.updateBill)
  const updatePeople = useStore((state) => state.updatePeople)

  return (
    <div className={styles.controls}>
      <CustomInput upd={updateBill} value={bill} label={'Bill'}  inputId={'bill'} inputIcon={'dollar'}/>
      <ButtonsContainer per={percentage} />
      <CustomInput upd={updatePeople} value={people} label={'Number of people'} inputId={'user'} inputIcon={'user'}/>
    </div>
  )
}

export default Controls