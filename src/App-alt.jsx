// import Counter from "./Components/Counter"
// import ComplexCounter from "./Components/ComplexCounter"
// import CounterThree from "./Components/CounterThree"
import React from "react";
import { useReducer } from "react";
import ComponentA from "./Components/ComponentB"


// eslint-disable-next-line react-refresh/only-export-components
export const counterContext = React.createContext();

const initialState = 0;
const Reducer = (currentState, action) => {
  switch(action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(Reducer, initialState)

  return (
    <div>
      <p>Count - {count}</p>
      <counterContext.Provider value={{countDispatch: dispatch}}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  )
}

export default App
