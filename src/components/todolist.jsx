import React, { useState } from 'react';
import usetodo from '../context/todocontext';

function Todolist() {
  const { todos, updatetodo, deletetodo, togglecomplete } = usetodo();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = (id) => {
    deletetodo(id);
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.todo);
  };

  const handleUpdate = (id, completed) => {
    if (editText.trim() === '') return;
    updatetodo(id, { id, todo: editText, completed });
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
      {todos.length > 0 &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className='bg-gray-300 text-black w-1/2 p-4 h-full border-none rounded-2xl flex justify-between'
          >
            <div className='flex items-center'>
              <input
                type='checkbox'
                onChange={() => togglecomplete(todo.id)}
                checked={todo.completed}
                className='mr-2'
              />

              {editingId === todo.id ? (
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='bg-white px-2 py-1 rounded'
                />
              ) : (
                <h3 className={`text-white ${todo.completed ? 'line-through' : ''}`}>
                  {todo.todo}
                </h3>
              )}
            </div>

            <div className='flex gap-4'>
              {editingId === todo.id ? (
                <button
                  className='cursor-pointer bg-green-500 text-white p-2 rounded-sm'
                  onClick={() => handleUpdate(todo.id, todo.completed)}
                >
                  Save
                </button>
              ) : (
                <button
                  className='cursor-pointer bg-white p-2 rounded-sm'
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
              )}
              <button
                className='cursor-pointer bg-red-500 text-white p-2 rounded-sm'
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Todolist;
