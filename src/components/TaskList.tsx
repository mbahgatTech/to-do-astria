import React from 'react';
import { TaskInterface } from '@/utils/Types';

const TaskList = ({ tasks, deleteTask } : { tasks: Array<TaskInterface>, deleteTask: (id: string) => void }) => {
  return (
    <ul>
      {
        tasks.map(todo => (
            <li key={todo.id} className='p-2 rounded-xl m-3 h-16 border-gray-700 bg-white'>
              <span className='text-black m-3'>{todo.description}</span>
              <div className='float-right w-20 h-full'>
                <button onClick={() => deleteTask(todo.id)} className='bg-red-700 p-0.5 rounded-md h-full w-full'>Delete</button>
              </div>
            </li>
        ))
      }
    </ul>
  );
};
 
export default TaskList;