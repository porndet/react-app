import React, {useReducer} from 'react'

const initial = 0;
const reducer = (state, action) => {
  switch(action)
  {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initial
    default:
      return state;
  }
}

function ReducerCounterone() {
  const [count, dispatch] = useReducer(reducer, initial)

  return (
    <div>
        <div>Count - {count}</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 px-3 py-1 rounded" onClick={() => dispatch('increment')}>Increment</button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold m-2 px-3 py-1 rounded" onClick={() => dispatch('decrement')}>Decrement</button>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold m-2 px-3 py-1 rounded" onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerCounterone