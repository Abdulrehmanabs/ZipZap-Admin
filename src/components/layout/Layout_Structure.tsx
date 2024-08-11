"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SignUp from "../SignUp/SignUp";
import { useEffect, useState } from "react";

const Layout_Structure = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  if (typeof window !== "undefined") {
    const item = client ? localStorage.getItem("user") : null;
    if (!item && client) {
      return <SignUp />;
    } else if (client) {
      return (
        <main className="flex min-h-screen max-h-screen overflow-auto">
          <Sidebar />
          <div className="w-full min-h-screen max-h-screen overflow-auto">
            <Header />
            {children}
          </div>
        </main>
      );
    }
  }
};

export default Layout_Structure;
