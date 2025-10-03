import { Button } from "@/components/ui/button";

interface ConversationPlaceholderProps {
  onQuestionClick: (question: string) => void;
}

const Questions = [
  "What medications are available for Myasthenia Gravis?",
  "How can I manage fatigue and weakness in daily life?",
  "What is my long-term prognosis with Myasthenia Gravis?",
];

export const ConversationPlaceholder = ({
  onQuestionClick,
}: ConversationPlaceholderProps) => {
  return (
    <div className="flex flex-col gap-6 h-full justify-end">
      <h1 className="text-base leading-4 px-2">Ask me anything 🌞</h1>
      <div className="flex flex-col gap-1">
        {Questions.map((question) => (
          <Button
            key={question}
            variant="ghost"
            size="sm"
            className="text-xs justify-start cursor-pointer"
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
};
