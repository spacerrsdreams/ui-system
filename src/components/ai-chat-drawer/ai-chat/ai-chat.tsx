"use client";

import { type PromptInputMessage } from "@/components/ai-elements/prompt-input";
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { AiChatForm } from "@/components/ai-chat-drawer/ai-chat/ai-chat-form";
import { AiModels, AiModelT } from "@/constants/ai-models";
import { Conversation } from "@/components/ai-chat-drawer/ai-chat/conversation";

export const AiChat = () => {
  const [input, setInput] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const [model, setModel] = useState<AiModelT["value"]>(AiModels[0].value);
  const { messages, sendMessage, status, regenerate } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage(
      {
        text: message.text || "Sent with attachments",
        files: message.files,
      },
      {
        body: {
          model: model,
          webSearch: webSearch,
        },
      }
    );

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 flex-col">
        <Conversation
          messages={messages}
          status={status}
          regenerate={regenerate}
        />
      </div>
      <AiChatForm
        model={model}
        setModel={setModel}
        input={input}
        setInput={setInput}
        webSearch={webSearch}
        setWebSearch={setWebSearch}
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
};
