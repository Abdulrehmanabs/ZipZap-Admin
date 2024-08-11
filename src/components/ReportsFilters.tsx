import React, { useState } from "react";

type Props = {
  filters: string;
  setFilters: Function;
};
const ReportsFilters = ({ filters, setFilters }: Props) => {
  const reportsFiltersValue = ["All Reports", "Blocked"];
  return (
    <div className="flex px-6 py-3 gap-6 bg-[#E5E5E5]">
      {/* ignored here */}
      {reportsFiltersValue.map((item) => (
        <div
          key={item}
          className={` rounded-md px-4 py-2 cursor-pointer text-nowrap ${
            filters == item ? "bg-[#AEAEAE] text-sidebar-white" : "bg-[#DADADA]"
          }`}
          onClick={() => setFilters(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ReportsFilters;
