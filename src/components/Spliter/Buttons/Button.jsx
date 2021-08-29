import React from "react"
import styles from './../../styles/buttons.module.scss'

const Button = (props) => {
  const {buttonText} = props
  return (
    <button className={styles.button}>{buttonText}</button>
  )
}

export default Button