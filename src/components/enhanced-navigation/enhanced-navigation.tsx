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
  const [prefersSidebar, setPrefersSidebar] = React.useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onMenuTriggerClick = () => setPrefersSidebar(true);

  return (
    <>
      <MenuTrigger
        toggleMenu={toggleMenu}
        isOpen={isOpen}
        onClick={onMenuTriggerClick}
      />

      <div
        onMouseEnter={() => setIsOpen(true)}
        className={cn(
          "fixed top-10 left-0 w-8 opacity-0",
          !isOpen && `h-[200px]`
        )}
      />

      <div
        onMouseLeave={() => setIsOpen(false)}
        data-burger-menu
        className={cn(
          "fixed top-18  left-0 w-60 h-full ",
          "transform transition-all duration-200 ease-in-out",
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="py-2 px-2 rounded-tr-md shadow-sm rounded-br-md  bg-sidebar border-t border-r border-b">
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
