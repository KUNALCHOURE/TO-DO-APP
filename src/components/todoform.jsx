import React, { useState } from 'react';
import usetodo from '../context/todocontext';

function Todoform() {
  const [todo, settodo] = useState('');
  const { addtodo } = usetodo();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    addtodo(todo);
    settodo('');
  };

  return (
    <div className='w-1/2 flex justify-center mt-10'>
      <form onSubmit={handlesubmit} className='flex w-full'>
        <input
          type='text'
          placeholder='Write Todos...'
          value={todo}
          onChange={(e) => settodo(e.target.value)}
          className='bg-slate-600 text-white placeholder-gray-300 w-full p-3 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-green-400'
        />
        <button
          type='submit'
          className='bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-r-xl transition-colors duration-200'
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Todoform;
