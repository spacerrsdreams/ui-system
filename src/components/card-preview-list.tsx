"use client";

import {
  Activity,
  ClipboardList,
  Snowflake,
  TestTubeDiagonal,
  Timer,
} from "lucide-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

import { PreviewCard } from "@/components/preview-card/preview-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cards = [
  {
    title: "MG-ADL Functional Assessment Test",
    description: {
      icon: <TestTubeDiagonal className="size-4 text-muted-foreground" />,
      text: "5 min · Daily living",
    },
  },
  {
    title: "MG-QOL15r Quality of Life Questionnaire",
    description: {
      icon: <ClipboardList className="size-4 text-muted-foreground" />,
      text: "5–7 min · Well-being",
    },
  },
  {
    title: "Quantitative MG Self Check (Simplified)",
    description: {
      icon: <Activity className="size-4 text-muted-foreground" />,
      text: "10 min · Strength",
    },
  },
  {
    title: "Ice Pack Test for Eyelid Weakness",
    description: {
      icon: <Snowflake className="size-4 text-muted-foreground" />,
      text: "2 min · Ptosis",
    },
  },
  {
    title: "Basic Muscle Fatigability Self Checks",
    description: {
      icon: <Timer className="size-4 text-muted-foreground" />,
      text: "5 min · Endurance",
    },
  },
];

export const CardPreviewList = () => {
  return (
    <div className="min-w-0 max-w-4xl">
      <div className="relative select-none space-y-4">
        <div className="flex items-center gap-2">
          <TestTubeDiagonal className="size-4 text-yellow-500/80" />
          <h4 className="text-muted-foreground text-sm">Asssesments</h4>
        </div>

        <Carousel
          plugins={[WheelGesturesPlugin()]}
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full group "
        >
          <CarouselContent className="gap-0 ">
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PreviewCard
                  title={card.title}
                  description={card.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="opacity-0 group-hover:opacity-100" />
          <CarouselNext className="opacity-0 group-hover:opacity-100" />
        </Carousel>
      </div>
    </div>
  );
};
