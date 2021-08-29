import React from "react";
import styles from './../../styles/buttons.module.scss'
import Button from "./Button";

const ButtonsContainer = () => {
  return(<div className={styles.buttonsContainer}>
    <Button buttonText='5%' />
    <Button buttonText='10%' />
    <Button buttonText='15%' />
    <Button buttonText='25%' />
    <Button buttonText='50%' />
    <Button buttonText='50%' />
  </div>)
}

export default ButtonsContainer