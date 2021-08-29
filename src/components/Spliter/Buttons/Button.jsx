import React from "react"
//import {useState} from "react";
import styles from './../../styles/buttons.module.scss'
import useStore from "../../store/store"

const Button = (props) => {
  //const [percentage, setPercentage] = useState(0);

  const {buttonText, dataPercentage} = props
  const updPercentage = useStore((state) => state.updateTipPercentage)

  const handleClick = (e) => {
    updPercentage(dataPercentage)
  }

  return (
    <button
      data-percentage={dataPercentage}
      onClick={e => handleClick(e.target)}
      className={styles.button}>
      {buttonText}
    </button>
  )
}

export default Button