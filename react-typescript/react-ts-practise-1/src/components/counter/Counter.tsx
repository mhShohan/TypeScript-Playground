import { useReducer } from 'react';

type InitialState = {
    counter: number;
};

// with load type
type UpdateAction = {
    type: 'INC' | 'DEC';
    payload: number;
};

// without payload types
type ResetAction = {
    type: 'RESET';
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { counter: 0 };

const reducer = (state: InitialState, action: CounterAction) => {
    switch (action.type) {
        case 'INC':
            return { counter: state.counter + action.payload };
        case 'DEC':
            return { counter: state.counter - action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({ type: 'INC', payload: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'DEC', payload: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'RESET' })}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;
