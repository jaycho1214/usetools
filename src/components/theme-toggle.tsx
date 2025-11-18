"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-1" align="end">
        <div className="flex gap-1">
          <Button
            variant={theme === "light" ? "default" : "ghost"}
            size="icon"
            onClick={() => setTheme("light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Light</span>
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "ghost"}
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Dark</span>
          </Button>
          <Button
            variant={theme === "system" ? "default" : "ghost"}
            size="icon"
            onClick={() => setTheme("system")}
          >
            <Monitor className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">System</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
