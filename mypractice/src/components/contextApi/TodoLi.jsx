import React, { useContext, useRef } from 'react';
import { TodoContext } from './ContextApi';

function TodoLi(props) {
  const { state, dispatch } = useContext(TodoContext);

  const inputRef = useRef();

  const addClick = () => {
    dispatch({ type: 'ADD_LIST', payload: inputRef.current.value });
  };

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={addClick}>add</button>
      <ul>
        {state.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLi;
