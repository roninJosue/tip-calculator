import React from "react";
import styles from './../styles/spliter.module.scss';
import Controls from "./Controls";
import Results from "./Results";

const Splitter = () => {
  return (<div className={styles.spliter}>
    <Controls />
    <Results />
  </div>)
}

export default Splitter