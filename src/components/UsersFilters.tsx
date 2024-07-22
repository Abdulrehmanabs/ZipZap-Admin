import React, { useState } from "react";

type Props = {
  usersFilters: string;
  setUsersFilters: Function;
};
const UsersFilters = ({ usersFilters, setUsersFilters }: Props) => {
  const usersFiltersValue = [
    "All Users",
    "Job Seekers",
    "Recuriters",
    "Blocked",
  ];
  return (
    <div className="flex px-6 py-3 gap-6 bg-[#E5E5E5]">
      {usersFiltersValue.map((filter) => (
        <div
          key={filter}
          className={` rounded-md px-4 py-2 cursor-pointer ${
            usersFilters == filter
              ? "bg-[#AEAEAE] text-sidebar-white"
              : usersFilters == "" && filter == "All Users"
              ? "bg-[#AEAEAE] text-sidebar-white"
              : "bg-[#DADADA]"
          }`}
          onClick={() => {
            if (filter == "All Users") {
              setUsersFilters("");
            } else {
              setUsersFilters(filter);
            }
          }}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default UsersFilters;
