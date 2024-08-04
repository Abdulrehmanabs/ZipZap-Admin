"use client";
import Reports from "@/components/Reports";
import ReportsFilters from "@/components/ReportsFilters";
import React, { useState } from "react";

const Page = () => {
  const [filters, setFilters] = useState("All Reports");
  return (
    <section>
      <ReportsFilters filters={filters} setFilters={setFilters} />
      <Reports />
    </section>
  );
};

export default Page;
