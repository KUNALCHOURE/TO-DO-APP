import { useEffect, useState } from 'react';
import './App.css';
import { Todocontextprovider } from './context/todocontext';
import Todoform from './components/todoform';
import Todolist from './components/todolist';

function App() {
  const [todos, setTodo] = useState([{ id: 1, todo: 'complete work', completed: false }]);

  const addtodo = (todo) => {
    const newtodo = {
      id: Date.now(),
      todo: todo,
      completed: false,
    };
    setTodo((prev) => [...prev, newtodo]);
  };

  const updatetodo = (id, updatedTodo) => {
    setTodo((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deletetodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const togglecomplete = (id) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load todos from localStorage on first render
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('todos'));
    if (stored && stored.length > 0) {
      setTodo(stored);
    }
  }, []);

  // Save todos to localStorage on change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Todocontextprovider
      value={{ todos, addtodo, updatetodo, deletetodo, togglecomplete }}
    >
      <div className='bg-gray-700 h-screen flex flex-col'>
        <div className='title p-5 mt-10 text-center'>
          <h2 className='text-2xl text-white font-bold'>Manage Your Todos</h2>
        </div>

        <div className='flex flex-1 flex-col bg-gray-900 items-center gap-10'>
          <Todoform />
          {todos.length > 0 && <Todolist />}
        </div>
      </div>
    </Todocontextprovider>
  );
}

export default App;
