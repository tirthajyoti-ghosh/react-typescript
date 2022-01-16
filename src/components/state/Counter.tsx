import { useReducer } from 'react'

type State = {
    count: number
}

type Action = {
    type: string
    payload: number
}

const initialState = {
    count: 0
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Counter state: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment by 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement by 10</button>
        </div>
    )
}

export default Counter
