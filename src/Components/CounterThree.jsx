import { useReducer } from "react"

const initialState = 0;
const initialState1 = 5;

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

export default function CounterThree() {
    const [count, dispatch] = useReducer(Reducer, initialState);
    const [count1, dispatch1] = useReducer(Reducer, initialState1);

    return(
        <div>
            <div>
            <div>Count - {count}</div>
            <button type="button" onClick={() => {dispatch('increment')}}>Increment</button>
            <button type="button" onClick={() => {dispatch('decrement')}}>Decrrement</button>
        </div>
        <div>
            <div>Count - {count1}</div>
            <button type="button" onClick={() => {dispatch1('increment')}}>Increment</button>
            <button type="button" onClick={() => {dispatch1('decrement')}}>Decrrement</button>
        </div>
        </div>
    )
}