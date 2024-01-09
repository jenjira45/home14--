import React, { useState } from 'react';

function TodoItem({ index, name, isComplete, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, editedName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleToggle = () => {
    editTodo(index, editedName, !isComplete);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <div className={`todo-item ${isComplete ? 'complete' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleToggle} className="TdbuttonSave" style={{ marginRight: '5px', color: isComplete ? 'red' : 'green', backgroundColor: 'transparent', border: 'none' }}>
          {isComplete ? '❌' : '✔'}
        </button>
        {isEditing ? (
          <div>
            <input type="text" value={editedName} onChange={handleInputChange} className="TdbuttonInput"/>
            <button onClick={handleSave} className="Tdbutton3">Save</button>
          </div>
        ) : (
          <p style={{ display: 'inline', textDecoration: isComplete ? 'line-through' : 'none', marginLeft: '5px' }}>{name}</p>
        )}
      </div>
      <div className="TdButton">
        {!isEditing && (
          <button onClick={handleEdit} className="Tdbutton1">Edit</button>
        )}
        {!isEditing && (
          <button onClick={handleDelete} className="Tdbutton2">Delete</button>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
