import './App.css';
import { useState } from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        type: 'INCREMENT',
        count: state.count + 1,
      }
      case 'DECREMENT':
      return {
        type: 'DECREMENT',
        count: state.count - 1,
      }
      default: return state
  }

}

function App() {
  let [timer, setTimer] = useState(0);
  const [state, dispatch] = useReducer(reducer, { type: 'INCREMENT', count:0 })
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'INCREMENT' })} >Incr</button>  
      <button onClick={() => dispatch({ type: 'DECREMENT' })} >Decr</button>
      {state.count}
    </div>
  );
}

export default App;
