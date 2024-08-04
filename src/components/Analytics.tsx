import DownIcon from "@/svgs/analytics/DownIcon";
import JobSeekersIcon from "@/svgs/analytics/JobSeekersIcon";
import RecruitersIcon from "@/svgs/analytics/RecruitersIcon";
import TotalJobsIcon from "@/svgs/analytics/TotalJobsIcon";
import UpIcon from "@/svgs/analytics/UpIcon";
import TotalUsersIcon from "@/svgs/analytics/UsersIcon";
import React, { useState } from "react";

const dummyData = [
  {
    label: "Total Users",
    count: 40689,
    percentage: 8.5,
    isUp: true,
    description: "Up from yesterday",
  },
  {
    label: "Total Jobs",
    count: 10293,
    percentage: 1.3,
    isUp: true,
    description: "Up from past week",
  },
  {
    label: "Recruiters",
    count: 89000,
    percentage: 4.3,
    isUp: false,
    description: "Down from yesterday",
  },
  {
    label: "Job Seekers",
    count: 12040,
    percentage: 1.8,
    isUp: true,
    description: "Up from yesterday",
  },
];

const Analytics = () => {
  const [data, setData] = useState(dummyData);
  return (
    <div className="grid max-[800px]:grid-cols-1  max-[1340px]:grid-cols-2 grid-cols-4 gap-6 p-6 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 relative bg-sidebar-white rounded-[14px]"
        >
          <h2 className="mb-4">{item.label}</h2>
          <div className="font-semibold text-3xl mb-6">{item.count}</div>
          <p className="flex items-center">
            {item.isUp ? <UpIcon /> : <DownIcon />}
            <span
              className={` mx-1 ${
                item.isUp ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.percentage + "% "}
            </span>
            {item.description}
          </p>
          <div className="absolute top-4 right-4">
            {index == 0 && <TotalUsersIcon />}
            {index == 1 && <TotalJobsIcon />}
            {index == 2 && <RecruitersIcon />}
            {index == 3 && <JobSeekersIcon />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
