import React from "react"
import styles from './../../styles/screen.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"

const Screen = (props) => {
  const {amount, label} = props

  return (<div className={styles.screen}>
    <div className={styles.screenGroup}>
      <span className={styles.screenLabel}>{label}</span>
      <span className={styles.screenLabel_2}>/ person</span>
    </div>
    <div className={styles.screenNumber}>
      <FontAwesomeIcon icon={faDollarSign} /> {amount}
    </div>
  </div>)
}

export default Screen