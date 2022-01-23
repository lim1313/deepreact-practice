import React, { createContext, useReducer, useState } from 'react';
import TodoLi from './TodoLi';
import TodoList from './TodoList';
import TodoList2 from './TodoList2';

export const TodoContext = createContext();

const initial = ['run', 'study'];

// useReducer : 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, action.payload];
    default:
      return state;
  }
}

function ContextApi(props) {
  const [list, setList] = useState('hello');
  const [num, setNum] = useState(1);
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <TodoContext.Provider value={{ list, num, state, dispatch }}>
      <TodoLi />
      <TodoList />
      <TodoList2 />
    </TodoContext.Provider>
  );
}

export default ContextApi;
