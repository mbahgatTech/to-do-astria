import fetchActions from './fetchActions';
import { ContextProps,GPTReply } from './types';
import { ChatCompletionRequestMessage } from 'openai';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ChatsContext = createContext<Partial<ContextProps>>({});

const MessagesProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [lastReply, setReply] = useState<GPTReply>({ role: '', content: '' });
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
        const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content: 'You are a to-do list chat bot, a large language model fine tuned to recieve a list of tasks and produce a list of easier steps or smaller action items for the user that helps them organize and achieve those tasks. Work with what you have and don\'t ask questions. You are a part of the backend of an application so you have to respond only with the list of action items.',
        };

        setMessages([systemMessage, ...messages]);
    }

    if (!messages?.length) {
        initializeChat();
    }
  }, [messages?.length, setMessages])

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);

    try {
        const newMessage: ChatCompletionRequestMessage = {
            role: 'user',
            content,
        };

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);

        const data = await fetchActions(newMessages);
        const reply = data.choices[0].message;

        // Add the assistant message to the state
        setMessages([...newMessages, reply]);
        setReply(reply);
    } catch (error: any) {
        console.log(error);
    } finally {
        setIsLoadingAnswer(false);
    }
  };

  return (
        <ChatsContext.Provider value={{ messages, lastReply, addMessage, isLoadingAnswer }}>
            {children}
        </ChatsContext.Provider>
  );
}

const useMessages = () => {
    return useContext(ChatsContext) as ContextProps;
}

export { MessagesProvider, useMessages };