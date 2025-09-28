export interface AiModelT {
  name: "GPT 4o" | "Deepseek R1";
  value: "openai/gpt-4o" | "deepseek/deepseek-r1";
}

export const AiModels: AiModelT[] = [
  {
    name: "GPT 4o",
    value: "openai/gpt-4o",
  },
  {
    name: "Deepseek R1",
    value: "deepseek/deepseek-r1",
  },
];
