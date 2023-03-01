import React, { useState } from 'react';
import styled from 'styled-components'
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ filter }) {
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

  const getFilteredItems = (todos, filter) => {
    if (filter === 'all') return todos;
    else return todos.filter(todo => todo.status === filter);
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

