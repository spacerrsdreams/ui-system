import { ReasoningUIPart } from "ai";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";

interface MessageReasoningProps {
  text: string;
  isStreaming: boolean;
}

export const MessageReasoning = ({
  text,
  isStreaming,
}: MessageReasoningProps) => {
  return (
    <Reasoning className="w-full" isStreaming={isStreaming}>
      <ReasoningTrigger />
      <ReasoningContent>{text}</ReasoningContent>
    </Reasoning>
  );
};
