import { useReducer } from "react"

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

export default function Counter() {
    const [count, dispatch] = useReducer(Reducer, initialState);
    return(
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={() => {dispatch('increment')}}>Increment</button>
            <button type="button" onClick={() => {dispatch('decrement')}}>Decrrement</button>
        </div>
    )
}