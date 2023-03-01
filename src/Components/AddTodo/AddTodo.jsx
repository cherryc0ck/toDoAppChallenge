import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length === 0) return;

    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput 
        type='text' 
        placeholder='Add Todo' 
        ref={inputRef} 
        value={text} 
        onChange={handleChange} 
      />
      <StyledButton>Add</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  padding: 1.4rem 1rem;
  background-color: var(--color-bg-dark);
`;

const StyledInput = styled.input`
  flex: 1 0 auto;
  font-size: 1.4rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: var(--color-accent);
  color: var(--color-white);
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0 2rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  :hover {
    filter: brightness(125%);
  }
`;

