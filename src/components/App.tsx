import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/shop'>Shop</Link>

      <p>{count}</p>

      <div className={styles.container}>
        <button onClick={dec} className={styles.btn}>
          Dec
        </button>
        <button onClick={inc} className={styles.btn}>
          Inc
        </button>
      </div>

      <Outlet />
    </div>
  );
};
