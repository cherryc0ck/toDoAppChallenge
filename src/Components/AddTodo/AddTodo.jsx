import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

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
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Add Todo' 
        ref={inputRef} 
        value={text} 
        onChange={handleChange} 
      />
      <button>Add</button>
    </form>
  );
}

