import { useReducer } from 'react';
import { createStore } from 'redux';
import { Reducer } from 'redux';

import './App.css';
function App(){

const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + action.payload;
  } 
  else if (action.type === 'DECREMENT') {
    return state - action.payload;
  }

 return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state = ', store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  payload : 3
});
store.dispatch({
  type: 'INCREMENT',
  payload: 4
});
store.dispatch({
  type: 'DECREMENT',
  payload:2
});
return (
  
  <div >
    <p> hellow workd</p>
  
  </div>
  
)
}

export default App;
