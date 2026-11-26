
import { useState, useEffect } from "react";

function Counter() {

  const [attendance, setAttendance] = useState(0);

  useEffect(() => {
    console.log("Hi from flipkart");
  }, [attendance]);

  function increment() {
    setAttendance(attendance + 1);
  }

  return (
    <>
      <h1>hi</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Counter;
