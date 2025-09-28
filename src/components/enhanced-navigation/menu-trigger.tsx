import { cn } from "@/lib/utils";
import { ChevronsRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuTriggerProps {
  toggleMenu: () => void;
  className?: string;
  isOpen: boolean;
}

export const MenuTrigger = ({
  toggleMenu,
  className,
  isOpen,
}: MenuTriggerProps) => {
  return (
    <div className="fixed top-2.5 left-2.5 group">
      <Button
        onClick={toggleMenu}
        data-burger-menu
        className={cn("z-50  p-3", className)}
        variant="ghost"
        size="icon"
        aria-label="Toggle navigation menu"
      >
        <Menu className="size-5.5 block group-hover:hidden" strokeWidth={1.5} />
        <ChevronsRight
          className="size-5.5 hidden group-hover:block"
          strokeWidth={1.5}
        />
      </Button>
    </div>
  );
};
