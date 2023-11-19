import { useState } from "react";

import styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <h1>App!</h1>

      <div className={styles.container}>
        <button onClick={dec} className={styles.btn}>
          Dec
        </button>
        <button onClick={inc} className={styles.btn}>
          Inc
        </button>
      </div>
      
      <p>{count}</p>
    </div>
  );
};
