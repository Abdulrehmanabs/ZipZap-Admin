"use client";
import Users from "@/components/Users";
import UsersFilters from "@/components/UsersFilters";
import React, { useState } from "react";

const Page = () => {
  const [usersFilters, setUsersFilters] = useState("All Users");
  return (
    <div className="w-full overflow-auto">
      <UsersFilters
        setUsersFilters={setUsersFilters}
        usersFilters={usersFilters}
      />
      <Users filter={usersFilters} />
    </div>
  );
};

export default Page;
