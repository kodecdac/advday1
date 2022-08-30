import { useState } from "react";

function Playground() {
  return (
    <div>
      <WithdrawCounter1 />
      <hr />
      <WithdrawCounter2 />
    </div>
  );
}

function WithdrawCounter1() {
  // STATE
  let [balance, setBalance] = useState(100);

  // SAME LOGIC
  const deposit = () => {
    setBalance(balance + 100);
  };

  return (
    <div>
      <h1>Counter1 - {balance}</h1>
      <input type="button" value="Operation" onClick={deposit} />
    </div>
  );
}

function WithdrawCounter2() {
  // STATE
  let [balance, setBalance] = useState(100);

  // SAME LOGIC
  const deposit = () => {
    setBalance(balance + 100);
  };

  return (
    <div>
      <h1>Counter2 - {balance}</h1>
      <input type="button" value="Operation" onClick={deposit} />
    </div>
  );
}

export default Playground;
