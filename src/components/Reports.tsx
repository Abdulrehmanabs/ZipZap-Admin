import { useState } from "react";
import Table from "./Table";
import { usePathname } from "next/navigation";

const dummyReports = [
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Blocked",
    action: "Ok",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Blocked",
    action: "Ok",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
  {
    id: "87364523",
    jobId: "87364523",
    report: "View Report",
    status: "Active",
    action: "Blocked",
  },
];
const headers = ["User ID", "Job ID", "Reports", "Status", "Action"];

const Reports = ({ filters }: { filters: string }) => {
  const pathname = usePathname();
  const [reports, setReports] = useState(dummyReports);
  return (
    <div className="p-6">
      <h2 className="font-semibold text-2xl">
        {"List of "} {filters ? filters : "..."}
      </h2>
      <div className="text-gray-500 mb-6">
        {" "}
        Total Reports :{" "}
        {
          // pathname == "/" ? users.slice(0, 3).length :
          reports.filter((report) =>
            filters == "All Reports"
              ? true
              : filters == "Blocked"
              ? report.status == "Blocked"
              : null
          ).length
        }
      </div>
      {/* table */}
      <Table
        headers={headers}
        users={pathname == "/" ? reports.slice(0, 3) : reports}
        filter={filters}
      />
    </div>
  );
};

export default Reports;
