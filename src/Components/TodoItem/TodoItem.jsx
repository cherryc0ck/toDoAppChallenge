import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { text, id, status } = todo;

  const handleUpdate = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  return (
    <li>
      <input id={id} type='checkbox' checked={status === 'completed'} onChange={handleUpdate} />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => onDelete(todo)}>
        <FaTrash />
      </button>
    </li>
  );
}

