"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>WordQuest Isle</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Classic Mode</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuButton>Start Game</SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Creative Mode</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuButton>Create Category</SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Frenzy Mini-Games</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuButton>Play</SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <p>Footer Content</p>
        </SidebarFooter>

        <SidebarRail>
          <SidebarTrigger />
        </SidebarRail>
      </Sidebar>
      <SidebarInset>
        {/* Main Content Here */}
        <div>Main Content</div>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}
