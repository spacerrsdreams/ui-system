import Image from "next/image";

interface PreviewCardProps {
  title: string;
  description: {
    icon: React.ReactNode;
    text: string;
  };
  image?: string;
}

export const PreviewCard = (props: PreviewCardProps) => {
  return (
    <div className="w-full">
      <div className="h-54 w-full transition-all duration-300 ease-in-out overflow-hidden rounded-xl flex-col flex items-stretch">
        <Image
          src="https://www.notion.so/images/home/learn/the-ultimate-guide-to-notion-templates.png"
          alt="Preview Card"
          className="w-full h-32 object-cover"
          width={1200}
          height={630}
        />
        <div className="flex-1 flex p-3 pb-2.5 bg-card  justify-stretch">
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-sm text-foreground fontmedium overflow-hidden line-clamp-2">
              {props.title}
            </p>
            <div className="flex items-center gap-1">
              {props.description.icon}
              <span className="fontmedium overflow-hidden line-clamp-1 text-xs text-muted-foreground">
                {props.description.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
