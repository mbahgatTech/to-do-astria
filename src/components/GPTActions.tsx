import React from 'react';
import { TaskInterface } from '@/utils/Types';

const GPTActions = ({ tasks }: { tasks: Array<TaskInterface> }) => {
    const handleSubmit = () => {
        console.log(tasks);
    };
    
    return (
        <div className='flex'>
            <button onClick={handleSubmit} className='bg-[#00A67E] p-2 rounded-xl m-3 h-16 w-full'>Copilot Actions</button>
        </div>
    );
};

export default GPTActions;