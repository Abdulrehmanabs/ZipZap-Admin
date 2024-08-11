"use client";
import Reports from "@/components/Reports";
import ReportsFilters from "@/components/ReportsFilters";
import React, { useState } from "react";

const Page = () => {
  const [filters, setFilters] = useState("All Reports");
  return (
    <div className="w-full overflow-auto">
      <ReportsFilters filters={filters} setFilters={setFilters} />
      <Reports filters={filters} />
    </div>
  );
};

export default Page;
