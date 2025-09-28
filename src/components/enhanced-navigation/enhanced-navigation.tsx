"use client";

import * as React from "react";
import { Home, Search, Settings, User, FileText, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuTrigger } from "@/components/enhanced-navigation/menu-trigger";
import { MenuHeader } from "@/components/enhanced-navigation/menu-header";
import { MenuItem } from "./menu-item";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function BurgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest("[data-burger-menu]")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <>
      <MenuTrigger toggleMenu={toggleMenu} isOpen={isOpen} />

      <div
        data-burger-menu
        className={cn(
          "fixed top-14 left-0 w-60 rounded-tr-md shadow-sm rounded-br-md  bg-sidebar border-t border-r border-b ",
          "transform transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="py-2 px-2">
          <ul className="space-y-0.5">
            {menuItems.map((item) => {
              return (
                <MenuItem
                  key={item.label}
                  Icon={item.icon}
                  active={item.label === "Home"}
                  label={item.label}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
