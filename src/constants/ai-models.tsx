import { DeepseekIcon } from "@/components/icons/deepseek.icon";
import { OpenAiIcon } from "@/components/icons/openai.icon";
import { JSX } from "react";

export interface AiModelT {
  name: "GPT 4o" | "Deepseek R1";
  value: "openai/gpt-4o" | "deepseek/deepseek-r1";
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const AiModels: AiModelT[] = [
  {
    name: "GPT 4o",
    value: "openai/gpt-4o",
    icon: OpenAiIcon,
  },
  {
    name: "Deepseek R1",
    value: "deepseek/deepseek-r1",
    icon: DeepseekIcon,
  },
];
