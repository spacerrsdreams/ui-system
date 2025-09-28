import {
  PromptInput,
  PromptInputActionMenu,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { GlobeIcon } from "lucide-react";
import { AiModels, AiModelT } from "@/constants/ai-models";
import { ChatStatus } from "ai";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

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
  const SelectedModel = AiModels.find((AiModel) => AiModel.value === model)!;

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
        <PromptInputTools className="gap-0.5 py-0">
          <PromptInputActionMenu>
            <PromptInputActionMenuTrigger
              variant="ghost"
              className="!rounded-full !p-2 size-7"
              size="icon"
            />
          </PromptInputActionMenu>

          <Select onValueChange={(value: AiModelT["value"]) => setModel(value)}>
            <SelectTrigger
              showChevron={false}
              className="group transition-all duration-200 border-none hover:bg-muted-foreground/40 hover:text-foreground rounded-full !size-7 p-2 items-center justify-center flex"
            >
              <SelectedModel.icon className="size-4 group-hover:text-foreground" />
            </SelectTrigger>
            <SelectContent>
              {AiModels.map((AiModel) => (
                <SelectItem key={AiModel.value} value={AiModel.value}>
                  {<AiModel.icon className="size-4 text-foreground" />}
                  <span className="text-xs">{AiModel.name}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PromptInputButton
            variant="ghost"
            className={cn("!rounded-full", webSearch && " text-foreground")}
            size="icon"
            onClick={() => setWebSearch(!webSearch)}
          >
            <GlobeIcon size={16} />
            <span className="text-xs">Web Search</span>
          </PromptInputButton>
        </PromptInputTools>
        <PromptInputSubmit
          disabled={!input || status !== "ready"}
          status={status}
        />
      </PromptInputToolbar>
    </PromptInput>
  );
};
