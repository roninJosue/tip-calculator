import React from "react";
import styles from './../../styles/buttons.module.scss'
import Button from "./Button";
import CustomInput from "../Controls/CustomInput";
import useStore from "../../store/store";
import {nanoid} from "nanoid";

const ButtonsContainer = () => {
  const updPercentage = useStore((state) => state.updateTipPercentage)

  const buttonObj = [
    {
      buttonText: 5,
      dataPercentage: 0.05
    },
    {
      buttonText: 10,
      dataPercentage: 0.1
    },
    {
      buttonText: 15,
      dataPercentage: 0.15
    },
    {
      buttonText: 25,
      dataPercentage: 0.25
    },
    {
      buttonText: 50,
      dataPercentage: 0.5
    }
  ];

  return(<div className={styles.buttonsContainer}>
    {
      buttonObj.map(button => <Button
        key={nanoid()}
        updPercentage={updPercentage}
        buttonText={button.buttonText}
        dataPercentage={button.dataPercentage}/>)
    }
    <CustomInput input2={true} updPercentage={updPercentage} placeHolder={'Custom'}/>
  </div>)
}

export default ButtonsContainer