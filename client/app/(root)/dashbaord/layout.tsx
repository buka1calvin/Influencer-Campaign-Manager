import NavBar from "@/components/navBar/NavBar";
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";
import React from "react";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-screen flex flex-col overflow-hidden">
        <TopNav/>
        <div className="flex h-full w-full">
          <SideNav/>
          <div className="w-full h-full">
          {children}
          </div>
        </div>
    </main>
  );
}
