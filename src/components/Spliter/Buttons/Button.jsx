import React from "react"
import styles from './../../styles/buttons.module.scss'

const Button = (props) => {
  const {buttonText, dataPercentage, second, reset, updPercentage} = props

  const handleClick = () => {
    if (second) {
      reset()
    } else {
      updPercentage(dataPercentage)
    }
  }

  return (
    <button
      data-percentage={dataPercentage}
      onClick={() => handleClick()}
      className={second ? styles.button + ' ' + styles.button2 : styles.button}>
      {buttonText}
    </button>
  )
}

export default Button