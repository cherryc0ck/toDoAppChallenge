import React, { useState } from 'react';
import styled from 'styled-components'
import { useImmer } from 'use-immer';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([
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

  const handleAdd = todo => {
    setToDos([...toDos, todo]);
  };

  return (
    <section>
      <ul>
        {toDos.map(toDo => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
          </li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

