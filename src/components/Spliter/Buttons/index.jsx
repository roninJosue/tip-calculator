import React from "react";
import styles from './../../styles/buttons.module.scss'
import Button from "./Button";
import CustomInput from "../Controls/CustomInput";
import useStore from "../../store/store";

const ButtonsContainer = () => {
  const updPercentage = useStore((state) => state.updateTipPercentage)

  return(<div className={styles.buttonsContainer}>
    <Button updPercentage={updPercentage} buttonText='5%' dataPercentage={0.05} />
    <Button updPercentage={updPercentage} buttonText='10%' dataPercentage={0.1} />
    <Button updPercentage={updPercentage} buttonText='15%' dataPercentage={0.15} />
    <Button updPercentage={updPercentage} buttonText='25%' dataPercentage={0.25} />
    <Button updPercentage={updPercentage} buttonText='50%' dataPercentage={0.5} />
    <CustomInput input2={true} updPercentage={updPercentage} placeHolder={'Custom'}/>
  </div>)
}

export default ButtonsContainer