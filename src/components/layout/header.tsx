"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchDialog } from "@/components/search-dialog";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold md:text-xl">PyMentor</h1>
      </div>
      <div className="flex items-center gap-4">
        <SearchDialog />
        <ThemeToggle />
      </div>
    </header>
  );
}
