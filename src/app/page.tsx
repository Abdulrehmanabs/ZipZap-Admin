"use client";
import Analytics from "@/components/Analytics";
import Reports from "@/components/Reports";
import Users from "@/components/Users";

export default function Home() {
  return (
    <div className="w-full overflow-auto">
      <Analytics />

      <Users />

      <Reports />
    </div>
  );
}
