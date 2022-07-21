import { useCounterDispatch, useCounterSelector } from "../../hooks/storeHook";

import counterSlice from "./counterSlice";

function Counter() {
  const dispatch = useCounterDispatch();
  const { increment } = counterSlice.actions;
  const value = useCounterSelector((state: { counter: { value: any } }) => state.counter.value);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(3))}>click me</button>
      <h2>{value}</h2>
    </div>
  );
}

export default Counter;
