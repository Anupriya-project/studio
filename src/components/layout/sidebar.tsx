'use client';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { navItems, adminNavItem } from '@/lib/data';
import Link from 'next/link';
import { PyMentorLogo } from '../icons/logo';

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <PyMentorLogo className="size-8 text-primary" />
          <span className="text-xl font-semibold">PyMentor</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={item.title}
                >
                  <item.icon className="size-5" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href={adminNavItem.href} passHref legacyBehavior>
              <SidebarMenuButton
                isActive={isActive(adminNavItem.href)}
                tooltip={adminNavItem.title}
              >
                <adminNavItem.icon className="size-5" />
                <span>{adminNavItem.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
