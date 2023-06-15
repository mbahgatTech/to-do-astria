import { ChatCompletionRequestMessage } from 'openai';

const fecthActions = async (messages: ChatCompletionRequestMessage[]) => {
    try {
        const response = await fetch('/api/actions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages })
        });

        return await response.json();
    } catch (error: any) {
        console.log(error);
    }
};

export default fecthActions;
