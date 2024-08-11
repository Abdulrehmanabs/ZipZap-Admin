import BlockedIcon from "@/svgs/BlockedIcon";
import EyeViewReports from "@/svgs/EyeViewReports";
import SuccessIcon from "@/svgs/SuccessIcon";
import ThArrowDown from "@/svgs/ThArrowDown";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  filter: string;
  headers: string[];
  users: {
    avator?: string;
    name?: string;
    id: string;
    email?: string;
    type?: string;
    status: string;
    action: string;
    jobId?: string;
    report?: string;
  }[];
};

const Table = ({ headers, users, filter }: Props) => {
  return (
    <table className="w-full overflow-x-auto bg-sidebar-white px-4 pb-1 mt-4 rounded-[20px]">
      <thead>
        <tr className="text-gray-500">
          {headers.map((header) => (
            <td key={header} className="px-4 py-3 cursor-default">
              <span className="flex items-center gap-2">
                {header} <ThArrowDown />
              </span>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {users
          .filter((user) =>
            filter == "All Users" || filter == "All Reports"
              ? true
              : filter == "Job Seekers"
              ? user.type == "Job Seeker"
              : filter == "Recruiters"
              ? user.type == "Recruiter"
              : filter == "Blocked"
              ? user.status == "Blocked"
              : null
          )
          .map((item, index) => (
            <tr key={index}>
              {item.avator && (
                <td className="px-4 py-3 bg-[#F5F5F5] rounded-l-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="w-[37px] h-[38px] bg-white rounded-[10px] flex justify-center items-end overflow-hidden">
                      <Image
                        className="w-[31px] h-[31px]"
                        src={`/${item.avator}`}
                        alt={item.name || "User img"}
                        width={31}
                        height={31}
                        priority
                      />
                    </span>
                    {item.name}
                  </div>
                </td>
              )}
              <td
                className={`px-4 py-3 bg-[#F5F5F5] ${
                  item.jobId ? " rounded-l-[12px]" : " "
                }`}
              >
                {item.id}
              </td>
              {item.jobId && (
                <td className="px-4 py-3 bg-[#F5F5F5] ">{item.jobId}</td>
              )}
              {item.email && (
                <td className="px-4 py-3 bg-[#F5F5F5] ">{item.email}</td>
              )}
              {item.report && (
                <td className="px-4 py-3 bg-[#F5F5F5] ">
                  <div className="flex gap-1 items-center bg-button-success-bg text-[#07A104] w-fit px-4 py-1 rounded-full cursor-pointer selection:bg-none">
                    {<EyeViewReports />}
                    {item.report}
                  </div>
                </td>
              )}
              {item.type && (
                <td className="px-4 py-3 bg-[#F5F5F5] ">{item.type}</td>
              )}
              <td className="px-4  bg-[#F5F5F5] ">
                <span
                  className={` rounded-md px-4 py-2 cursor-pointer selection:bg-none ${
                    item.status === "Active"
                      ? "bg-button-success-bg text-button-success-text"
                      : "bg-button-error-bg text-button-error-text"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3 bg-[#F5F5F5] rounded-r-[12px]">
                {item.action === "ok" ? <SuccessIcon /> : <BlockedIcon />}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
