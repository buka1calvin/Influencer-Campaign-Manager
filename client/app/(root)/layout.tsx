"use client";
import NavBar from "@/components/navBar/NavBar";
import { CampaignsProvider } from "@/contexts/CampaignsProvider";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: true,
    },
  },
});
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={client}>
      <CampaignsProvider>
        <main>
          <NavBar />
          {children}
        </main>
      </CampaignsProvider>
    </QueryClientProvider>
  );
}
