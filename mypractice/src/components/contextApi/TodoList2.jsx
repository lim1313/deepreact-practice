import React from 'react';
import { TodoContext } from './ContextApi';

function TodoList2(props) {
  return <TodoContext.Consumer>{(value) => value.num}</TodoContext.Consumer>;
}
export default TodoList2;
