import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import PinterestSvg from "@/assets/pinterest.svg";
import PinterestPng from "@/assets/pinterest.png";
import ImageTest from "@/assets/image.jpg";
import styles from "@/components/App.module.scss";

// TREE SHAKING (webpack will not include unused code in the bundle)
function TODO(a: number) {
  console.log('TODO FUNCTION');
}

export const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>IS DESKTOP</div>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>IS MOBILE</div>;
  // }

  // if (__ENV__ === "development") {
  //   // add devTools()
  // }

  // TODO('123')

  

  return (
    <div>
      <h1>Platform: {__PLATFORM__}</h1>
      <div>
        <PinterestSvg width={50} height={50} color="red" />
      </div>

      <div>
        <img src={PinterestPng} alt="pinterest png" />
        <img src={ImageTest} alt="test jpg" width={50} height={50} />
      </div>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </div>

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
