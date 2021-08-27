import styles from './components/styles/app.module.css'
import Splitter from "./components/Spliter";
import React from "react";

function App() {
  return (
    <main className={styles.App}>
      <h1 className={styles.appTitle}>SPLITTER</h1>
      <Splitter />
    </main>
  );
}

export default App;
