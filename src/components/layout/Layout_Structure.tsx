"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanstackQuery from "../testing/TanstackQuery";

const Layout_Structure = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen max-h-screen overflow-auto">
        <Sidebar />
        <div className="w-full min-h-screen max-h-screen overflow-auto">
          <TanstackQuery />
          <Header />
          {children}
        </div>
      </main>
    </QueryClientProvider>
  );
};

export default Layout_Structure;
