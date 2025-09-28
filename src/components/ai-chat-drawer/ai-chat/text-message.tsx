import { Response } from "@/components/ai-elements/response";
import { Check, CopyIcon, RefreshCcwIcon } from "lucide-react";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { Action, Actions } from "@/components/ai-elements/actions";
import { Fragment, useState } from "react";
import { UIMessage } from "@ai-sdk/react";
import { cn } from "@/lib/utils";

interface TextMessageProps {
  message: UIMessage;
  isLastMessage: boolean;
  regenerate: () => void;
  text: string;
  isStreaming: boolean;
}

export const TextMessage = ({
  message,
  isLastMessage,
  regenerate,
  text,
  isStreaming,
}: TextMessageProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group">
      <Message from={message.role}>
        <MessageContent>
          <Response>{text}</Response>
        </MessageContent>
      </Message>

      <Actions
        className={cn(
          "mt-1 gap-1.5 px-1 opacity-0 transition-all duration-300",
          message.role === "user" && "justify-end",
          !isStreaming && isLastMessage && "opacity-100",
          "group-hover:opacity-100"
        )}
      >
        <Action onClick={() => regenerate()} label="Retry" className="!size-7">
          <RefreshCcwIcon className="size-4" />
        </Action>
        <Action
          className="!size-7"
          onClick={() => handleCopy(text)}
          label="Copy"
        >
          {isCopied ? (
            <Check className="size-4" />
          ) : (
            <CopyIcon className="size-4" />
          )}
        </Action>
      </Actions>
    </div>
  );
};
