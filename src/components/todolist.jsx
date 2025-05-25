import React, { useState } from 'react';
import usetodo from '../context/todocontext';

function Todolist() {
  const { todos, updatetodo, deletetodo, togglecomplete } = usetodo();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = (id) => deletetodo(id);
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
            className='bg-slate-800 text-white w-1/2 p-4 rounded-2xl flex justify-between items-center shadow-lg transition-all'
          >
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                onChange={() => togglecomplete(todo.id)}
                checked={todo.completed}
                className='accent-green-500 w-5 h-5'
              />
              {editingId === todo.id ? (
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='bg-slate-700 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                />
              ) : (
                <h3 className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                  {todo.todo}
                </h3>
              )}
            </div>

            <div className='flex gap-2'>
              {editingId === todo.id ? (
                <button
                  className='bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md transition'
                  onClick={() => handleUpdate(todo.id, todo.completed)}
                >
                  Save
                </button>
              ) : (
                <button
                  className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition'
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
              )}
              <button
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition'
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
