import React from 'react';
import { useMessages } from '@/utils/useMessages';
import { TaskInterface, ContextProps } from '@/utils/interfaces';

const GPTActions = ({ tasks }: { tasks: Array<TaskInterface> }) => {
    const { lastReply, setReply, addMessage, isLoadingAnswer }: ContextProps = useMessages();

    const handleSubmit = async () => {
        let message: string = '';

        for (let i = 0; i < tasks?.length; i++) {
            message = `${message}- ${tasks[i].description}\n`;
        }

        await addMessage(message);
    };

    const handleClose = () => {
        setReply({role: '', content: ''});
    };
    
    return (
        <div className='flex'>
            {lastReply && lastReply.role === 'assistant' && (
                <div className='fixed w-full overflow-y-auto mx-auto my-auto max-h-[80%] inset-0 z-50 p-8 justify-center items-center animated fadeIn faster'>
                    <div className='border border-teal-500 shadow-lg bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto'>
                        <div className='modal-content py-4 text-left px-6'>
                            <div className='flex justify-between items-center pb-3'>
                                <p className='text-2xl font-bold text-[#00A67E]'>GPT Actions</p>
                                <button className='modal-close cursor-pointer z-50' onClick={handleClose}>
                                    <img src='/cross.svg' />
                                </button>
                            </div>
                            <div className='my-5 text-black'>
                                {lastReply.content?.split('\n')?.map(item => (
                                    <p>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
