import { SidebarMenuButton } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  Icon: (props: React.ComponentProps<"svg">) => React.ReactNode;
  label: string;
  active: boolean;
}

export const MenuItem = ({ Icon, label, active }: MenuItemProps) => {
  return (
    <li
      className={cn(
        "flex items-center px-3 gap-3 text-muted-foreground hover:bg-sidebar-border group cursor-pointer transition-all duration-200 rounded-md py-1",
        active && "bg-sidebar-border"
      )}
    >
      <Icon
        className={cn(
          "size-5 text-sidebar-accent ",
          active && "text-foreground"
        )}
        strokeWidth={1.35}
      />
      <span
        className={cn(
          "font-medium text-sm text-sidebar-accent duration-200",
          active && "text-foreground"
        )}
      >
        {label}
      </span>
    </li>
  );
};
