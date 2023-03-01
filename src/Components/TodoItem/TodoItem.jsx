import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { text, id, status } = todo;

  const handleUpdate = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  return (
    <StyledContainer>
      <StyledCheckbox id={id} type='checkbox' checked={status === 'completed'} onChange={handleUpdate} />
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
      <StyledButton onClick={() => onDelete(todo)}>
        <FaTrash />
      </StyledButton>
    </StyledContainer>
  );
}

const StyledContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  color: var(--clor-text);
`;

const StyledCheckbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledLabel = styled.label`
  flex: 1 1 0%;
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  color: var(--color-text);
  background-color: transparent;

  svg {
    width: 26px;
    height: 26px;
    background-color: var(--color-grey);
    border-radius: 100%;
    transition: all 150ms ease-out;
    
    :hover {
      background-color: var(--color-accent);
      transform: rotate(15deg) scale(1.2);
    }
  }
`;

