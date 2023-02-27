import React, { useState } from 'react';
import styled from 'styled-components'
import { useImmer } from 'use-immer';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: "장보기",
      status: 'active'
    },
    {
      id: '2',
      text: "공부하기",
      status: 'active'
    }
  ]);

  const handleAdd = added => {
    setTodos([...todos, added]);
  };

  const handleDelete = deleted => {
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  };
  
  const handleUpdate = updated => {
    setTodos(todos.map(todo => todo.id === updated.id ? updated : todo))
  };

  return (
    <section>
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

