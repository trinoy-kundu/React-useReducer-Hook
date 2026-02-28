import { useReducer } from "react"

const initialState = {
    counter: 0,
    counter2: 0,
};
const Reducer = (currentState, action) => {
    switch(action.type) {
        case 'increment':
            return {...currentState, counter: currentState.counter + action.value};
        case 'decrement':
            return {...currentState, counter: currentState.counter - action.value};
        case 'increment2':
            return {...currentState, counter2: currentState.counter2 + action.value};
        case 'decrement2':
            return {...currentState, counter2: currentState.counter2 - action.value};
        default:
            return currentState;

    }
};

export default function ComplexCounter() {
    const [count, dispatch] = useReducer(Reducer, initialState);
    return(
        <div>
            <div>
                <div>Count - {count.counter}</div>
                <button type="button" onClick={() => {dispatch({type: 'increment', value: 1})}}>
                    Increment by 1
                </button>
                <button type="button" onClick={() => {dispatch({type: 'decrement', value: 1})}}>
                    Decrement by 1
                </button>
            </div>
            <div>
                <div>Count2 - {count.counter2}</div>
                <button type="button" onClick={() => {dispatch({type: 'increment2', value: 1})}}>
                    Increment2 by 1
                </button>
                <button type="button" onClick={() => {dispatch({type: 'decrement2', value: 1})}}>
                    Decrement2 by 1
                </button>
            </div>
        </div>
    )
}