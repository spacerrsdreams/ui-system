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
    <div className="fixed top-2.5 left-2.5 group" onMouseEnter={toggleMenu}>
      <Button
        onClick={toggleMenu}
        data-burger-menu
        className={cn("z-[99999]  p-3", className)}
        variant="ghost"
        size="icon"
        aria-label="Toggle navigation menu"
      >
        <Menu
          className={cn(
            "size-5.5 block group-hover:hidden",
            isOpen && "hidden"
          )}
          strokeWidth={1.5}
        />
        <ChevronsRight
          className={cn("size-5.5 hidden group-hover:block", isOpen && "block")}
          strokeWidth={1.5}
        />
      </Button>
    </div>
  );
};
