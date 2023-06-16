import fetchActions from './fetchActions';
import { ContextProps,GPTReply } from './interfaces';
import { ChatCompletionRequestMessage } from 'openai';
import { 
  GPT_SYSTEM_MESSAGE,
  GPT_SYSTEM, 
  GPT_ASSISTANT, 
  GPT_USER } from './constants';
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
          role: GPT_SYSTEM,
          content: GPT_SYSTEM_MESSAGE,
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
            role: GPT_USER,
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
        setReply({ 
          role: GPT_ASSISTANT, 
          content: 'Failed to fetch task actions from GPT. Please try again at a later time.'
        });
    } finally {
        setIsLoadingAnswer(false);
    }
  };

  return (
        <ChatsContext.Provider value={{ messages, lastReply, setReply, addMessage, isLoadingAnswer }}>
            {children}
        </ChatsContext.Provider>
  );
}

const useMessages = () => {
    return useContext(ChatsContext) as ContextProps;
}

export { MessagesProvider, useMessages };
