import { useState } from "react";

import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <h1>App!</h1>

      <div>
        <button onClick={dec}>Dec</button>
        <button onClick={inc}>Inc</button>
        <p>{count}</p>
      </div>
    </div>
  );
};
