import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { GlobeIcon } from "lucide-react";
import { AiModels, AiModelT } from "./constants";
import { ChatStatus } from "ai";

interface AiChatFormProps {
  model: AiModelT["value"];
  setModel: (model: AiModelT["value"]) => void;
  input: string;
  setInput: (input: string) => void;
  webSearch: boolean;
  setWebSearch: (webSearch: boolean) => void;
  onSubmit: (message: PromptInputMessage) => void;
  status: ChatStatus | undefined;
}

export const AiChatForm = ({
  model,
  setModel,
  onSubmit,
  input,
  setInput,
  webSearch,
  setWebSearch,
  status,
}: AiChatFormProps) => {
  return (
    <PromptInput onSubmit={onSubmit} className="mt-4" globalDrop multiple>
      <PromptInputBody>
        <PromptInputAttachments>
          {(attachment) => <PromptInputAttachment data={attachment} />}
        </PromptInputAttachments>
        <PromptInputTextarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </PromptInputBody>
      <PromptInputToolbar>
        <PromptInputTools>
          <PromptInputActionMenu>
            <PromptInputActionMenuTrigger />
            <PromptInputActionMenuContent>
              <PromptInputActionAddAttachments />
            </PromptInputActionMenuContent>
          </PromptInputActionMenu>
          <PromptInputButton
            variant="ghost"
            onClick={() => setWebSearch(!webSearch)}
          >
            <GlobeIcon size={16} />
            <span>Search</span>
          </PromptInputButton>
          <PromptInputModelSelect
            value={model}
            onValueChange={(value: AiModelT["value"]) => setModel(value)}
          >
            <PromptInputModelSelectTrigger>
              <PromptInputModelSelectValue />
            </PromptInputModelSelectTrigger>
            <PromptInputModelSelectContent>
              {AiModels.map((m) => (
                <PromptInputModelSelectItem key={m.value} value={m.value}>
                  {m.name}
                </PromptInputModelSelectItem>
              ))}
            </PromptInputModelSelectContent>
          </PromptInputModelSelect>
        </PromptInputTools>
        <PromptInputSubmit disabled={!input && !status} status={status} />
      </PromptInputToolbar>
    </PromptInput>
  );
};
