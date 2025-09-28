import {
  Conversation as ConversationElement,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { UIMessage } from "@ai-sdk/react";

import { Loader } from "@/components/ai-elements/loader";
import { ChatStatus } from "ai";
import { cn } from "@/lib/utils";
import { MessageSources } from "@/components/ai-chat-drawer/ai-chat/message-sources";
import { MessageReasoning } from "@/components/ai-chat-drawer/ai-chat/message-reasoning";
import { TextMessage } from "./text-message";

interface ConversationProps {
  messages: UIMessage[];
  status: ChatStatus;
  regenerate: () => void;
  className?: string;
}

export const Conversation = ({
  messages,
  status,
  regenerate,
  className,
}: ConversationProps) => {
  const isStreaming = status === "streaming" || status === "submitted";

  return (
    <ConversationElement className={cn("h-full", className)}>
      <ConversationContent>
        {messages.map((message, messageIndex) => (
          <div key={message.id}>
            {message.role === "assistant" && (
              <MessageSources message={message} />
            )}

            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text": {
                  return (
                    <TextMessage
                      key={message.id + i}
                      message={message}
                      isLastMessage={messageIndex === messages.length - 1}
                      regenerate={regenerate}
                      text={part.text}
                      isStreaming={isStreaming}
                    />
                  );
                }
                case "reasoning": {
                  return (
                    <MessageReasoning
                      key={message.id + i}
                      text={part.text}
                      isStreaming={isStreaming}
                    />
                  );
                }
                default:
                  return null;
              }
            })}
          </div>
        ))}
        {status === "submitted" && <Loader />}
      </ConversationContent>
      <ConversationScrollButton />
    </ConversationElement>
  );
};
