import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = added => {
    setTodos([...todos, added]);
  };

  const handleDelete = deleted => {
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  };
  
  const handleUpdate = updated => {
    setTodos(todos.map(todo => todo.id === updated.id ? updated : todo))
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <StyledContainer>
      <ul>
        {filtered.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </StyledContainer>
  );
}

const readTodos = () => {
  console.log('todos');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const getFilteredItems = (todos, filter) => {
  if (filter === 'all') return todos;
  else return todos.filter(todo => todo.status === filter);
};

const StyledContainer = styled.section`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);

  ul {
    flex: 1 1 auto;
    overflow-y: auto;
  }
`;

