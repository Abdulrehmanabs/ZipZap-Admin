"use client";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Reports from "@/components/Reports";
import Sidebar from "@/components/Sidebar";
import Users from "@/components/Users";
import UsersFilters from "@/components/UsersFilters";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(1);
  const [usersFilters, setUsersFilters] = useState("");

  return (
    <main className="flex min-h-screen max-h-screen overflow-auto">
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="w-full min-h-screen max-h-screen overflow-auto">
        <Header selected={selected} />
        {selected == 1 || selected == 3 ? <Analytics /> : null}
        {selected == 2 ? (
          <UsersFilters
            setUsersFilters={setUsersFilters}
            usersFilters={usersFilters}
          />
        ) : null}
        {selected == 1 || selected == 2 ? <Users /> : null}
        {selected == 1 || selected == 4 ? <Reports /> : null}
      </div>
    </main>
  );
}
