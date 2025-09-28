import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import { type UIMessage } from "ai";

export const MessageSources = ({ message }: { message: UIMessage }) => {
  return (
    <>
      {message.parts.filter((part) => part.type === "source-url").length >
        0 && (
        <Sources>
          <SourcesTrigger
            count={
              message.parts.filter((part) => part.type === "source-url").length
            }
          />

          {message.parts
            .filter((part) => part.type === "source-url")
            .map((part, i) => (
              <SourcesContent key={`${message.id}-${i}`}>
                <Source
                  key={`${message.id}-${i}`}
                  href={part.url}
                  title={part.url}
                />
              </SourcesContent>
            ))}
        </Sources>
      )}
    </>
  );
};
