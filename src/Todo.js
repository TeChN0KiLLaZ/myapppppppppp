import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import { Delete, CheckCircle, Edit } from '@mui/icons-material';

function Todo({ todo, index, completeTodo, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText.trim()) {
      todo.text = newText;
      setIsEditing(false);
    }
  };

  return (
    <ListItem>
      {isEditing ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <ListItemText
          primary={todo.text}
          style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
        />
      )}
      <IconButton onClick={() => completeTodo(index)}>
        <CheckCircle color={todo.isCompleted ? 'primary' : 'disabled'} />
      </IconButton>
      <IconButton onClick={handleEdit}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => removeTodo(index)}>
        <Delete />
      </IconButton>
    </ListItem>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: 16 }}>
      <TextField
        variant="outlined"
        placeholder="Add Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
      />
    </form>
  );
}

export { Todo, TodoForm };
