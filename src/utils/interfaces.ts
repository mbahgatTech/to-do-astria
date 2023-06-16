import { ChatCompletionRequestMessage } from 'openai';

export interface TaskInterface {
    id: string,
    description: string
};

export interface ContextProps {
    messages: ChatCompletionRequestMessage[],
    lastReply: GPTReply,
    setReply: (reply: GPTReply) => any,
    addMessage: (content: string) => Promise<void>,
    isLoadingAnswer: boolean
};

export interface GPTReply {
    role: string,
    content: string
};
