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
  const firebaseConfig = {
    FIREBASE_API_KEY: "",
    FIREBASE_AUTH_DOMAIN: "",
    FIREBASE_PROJECT_ID: "",
    FIREBASE_STORAGE_BUCKET: "",
    FIREBASE_MESSAGING_SENDER_ID: "",
    FIREBASE_APP_ID: "",
    FIREBASE_MEASUREMENT_ID: "",
  };

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
