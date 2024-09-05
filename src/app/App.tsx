import styles from "./App.module.css"

import Header from "../widgets/Header"
import Main from "../widgets/Main"

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  )
}

export default App
