import React from 'react';
import { useMessages } from '@/utils/useMessages';
import { TaskInterface, GPTReply } from '@/utils/types';

const GPTActions = ({ tasks }: { tasks: Array<TaskInterface> }) => {
    const { lastReply, addMessage, isLoadingAnswer }: { lastReply: GPTReply, addMessage: (message: string) => any, isLoadingAnswer: Boolean } = useMessages();

    const handleSubmit = async () => {
        let message: string = '';

        for (let i = 0; i < tasks?.length; i++) {
            message = `${message}- ${tasks[i].description}\n`;
        }

        await addMessage(message);
    };
    
    return (
        <div className='flex'>
            {lastReply && lastReply.role === 'assistant' && (
                <span className='absolute mx-auto my-auto bg-gray-800 rounded-2xl overflow-auto'>
                    {lastReply.content}
                </span>
            )}

            {isLoadingAnswer && (
                <div className='m-4 flex justify-start'>
                    <img
                        src='https://www.teamsmart.ai/next-assets/team/ai.jpg'
                        className='h-9 w-9 rounded-full'
                        alt='avatar'
                    />
                    <div className='loader relative ml-2 flex items-center justify-between space-x-1.5 rounded-full bg-gray-200 p-2.5 px-4 dark:bg-gray-800'>
                        <span className='block h-3 w-3 rounded-full'></span>
                        <span className='block h-3 w-3 rounded-full'></span>
                        <span className='block h-3 w-3 rounded-full'></span>
                    </div>
                </div>
            ) || (
                <button onClick={handleSubmit} className='bg-[#00A67E] p-2 rounded-xl m-3 h-16 w-full'>Copilot Actions</button>
            )}
        </div>
    );
};

export default GPTActions;
