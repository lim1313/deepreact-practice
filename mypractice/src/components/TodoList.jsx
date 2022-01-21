import React, { useContext } from 'react';
import { TodoContext } from '../App';

function TodoList(props) {
  const { list } = useContext(TodoContext);

  return <div>{list}</div>;
}

export default TodoList;
