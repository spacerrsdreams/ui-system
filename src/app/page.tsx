import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const finalColors: {
  label: string;
  value: string;
}[] = [
  {
    label: "background",
    value: "oklch(0.2134 0 0)",
  },
  {
    label: "secondary",
    value: "oklch(0.2435 0 0)",
  },
  {
    label: "foreground",
    value: "oklch(0.985 0 0)",
  },
  {
    label: "muted-foreground",
    value: "oklch(0.5025 0.0079 97.46)",
  },
  {
    label: "placeholder-foreground",
    value: "oklch(0.5908 0.0083 80.71)",
  },
  {
    label: "card",
    value: "oklch(0.2645 0 0)",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full transition-all duration-300 ease-in-out">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          {finalColors.map((color) => (
            <div key={color.label} className="border p-2 rounded-md">
              <span>{color.label}</span>
              <div
                className="h-6 w-full rounded"
                style={{ backgroundColor: color.value }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Card>
            <CardHeader className="text-xs">
              <Input placeholder="Move page to..." />
            </CardHeader>
            <CardContent>This is the card content</CardContent>
            <CardFooter>This is the card footer</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
