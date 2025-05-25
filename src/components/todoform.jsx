import React, { useState } from 'react'
import usetodo from '../context/todocontext';

function Todoform() {

  const[todo,settodo]=useState("");


  const {addtodo}=usetodo();
const handlesubmit=(e)=>{
  e.preventDefault();
  if (todo.trim() === "") return;  //  this line remove the leading and trialing whitespace from the string 
addtodo(todo);
  settodo("");
}
  
  return (
    
         <div className='w-1/2 flex justify-center  mt-10' >
          <form action="" onSubmit={handlesubmit} className='flex w-full '>
               <input 
               type="text"
               placeholder='Write Todos..'
               value={todo}
               onChange={(e)=>settodo(e.target.value)}
                className='bg-gray-400 h-full w-full  text-white rounded-xl rounded-r-none p-3'
                />
                <button type='submit' className='bg-green-400   rounded-xl rounded-l-none p-3 '>
                  Add
                </button>
                </form>
             </div>

  )

}

export default Todoform
