"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { navItems, adminNavItem } from "@/lib/data";
import { SearchDialog } from "@/components/search-dialog";

export function Header() {
  const pathname = usePathname();
  
  const getPageTitle = () => {
    if (pathname === adminNavItem.href || pathname.startsWith(adminNavItem.href + '/')) return adminNavItem.title;
    const item = navItems.find((item) => item.href === pathname || (item.href !== '/' && pathname.startsWith(item.href)));
    return item ? item.title : "PyMentor";
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold md:text-xl">{getPageTitle()}</h1>
      </div>
      <div className="flex items-center gap-4">
        <SearchDialog />
      </div>
    </header>
  );
}
