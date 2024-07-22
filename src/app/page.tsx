"use client";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(1);

  return (
    <main className="flex min-h-screen max-h-screen ">
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="w-full">
        <Header selected={selected} />
        <Analytics />
      </div>
    </main>
  );
}
