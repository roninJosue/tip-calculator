import React from "react";
import styles from './../../styles/buttons.module.scss'
import Button from "./Button";

const ButtonsContainer = () => {
  return(<div className={styles.buttonsContainer}>
    <Button buttonText='5%' dataPercentage={0.05} />
    <Button buttonText='10%' dataPercentage={0.1} />
    <Button buttonText='15%' dataPercentage={0.15} />
    <Button buttonText='25%' dataPercentage={0.25} />
    <Button buttonText='50%' dataPercentage={0.5} />
  </div>)
}

export default ButtonsContainer