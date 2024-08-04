"use client";
import Users from "@/components/Users";
import UsersFilters from "@/components/UsersFilters";
import React, { useState } from "react";

const Page = () => {
  const [usersFilters, setUsersFilters] = useState("All Users");
  return (
    <div>
      <UsersFilters
        setUsersFilters={setUsersFilters}
        usersFilters={usersFilters}
      />
      <Users />
    </div>
  );
};

export default Page;
