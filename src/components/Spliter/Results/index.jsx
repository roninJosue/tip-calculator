import React from "react";
import styles from "./../../styles/results.module.scss"
import Screen from "./Screen";
import Button from "../Buttons/Button";
import useStore from "../../store/store";

const Results = () => {
  const {calculateAmountTip, calculateTotal} = useStore()
  return (
    <div className={styles.results}>
      <div>
        <Screen label={'Tip Amount'} amount={calculateAmountTip()}/>
        <Screen label={'Tip Amount'} amount={calculateTotal()}/>
      </div>
      <div>
        <Button second={true} buttonText={'Reset'}/>
      </div>
    </div>
  )
}

export default Results