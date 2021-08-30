import React from "react"
import styles from './../../styles/buttons.module.scss'
import useStore from "../../store/store"

const Button = (props) => {
  const {buttonText, dataPercentage, second, reset, updPercentage} = props

  const handleClick = (e) => {
    if (second) {
      reset()
    } else {
      updPercentage(dataPercentage)
    }
  }

  return (
    <button
      data-percentage={dataPercentage}
      onClick={e => handleClick(e.target)}
      className={second ? styles.button + ' ' + styles.button2 : styles.button}>
      {buttonText}
    </button>
  )
}

export default Button