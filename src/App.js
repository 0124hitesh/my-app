import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incNumber, decNumber } from './redux/actions/action';

function App() {

  const dispatch = useDispatch(); 
  const intialState = useSelector((state) => state.updateNumber);

  return (
    <>
      <div>
        <button onClick={() => dispatch(decNumber()) }>-</button>
        <input type="text" disabled={true} value={intialState}></input>
        <button onClick={() => dispatch(incNumber(5)) }>+</button>
      </div>
    </>
  );
}

export default App;

// changes in index.js

