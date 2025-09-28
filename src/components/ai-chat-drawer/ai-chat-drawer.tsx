"use client";

import { ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AiChat } from "./ai-chat/ai-chat";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function AiChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-8 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        AI
      </Button>

      <div
        className={cn(
          "h-full bg-background border-l transition-all duration-300 ease-i n-out overflow-hidden",
          // Mobile: fixed positioning
          "fixed top-0 right-0 z-50",
          // Desktop: relative positioning
          "sm:relative sm:z-auto",
          isOpen ? "w-[90%] sm:w-1/3 lg:w-[420px]" : "w-0"
        )}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold ">New AI Chat</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <ChevronsRight className="size-5 text-foreground" />
            </Button>
          </div>

          <AiChat />
        </div>
      </div>

      {/* Overlay for mobile only */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out z-40 sm:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
