import BlockedIcon from "@/svgs/BlockedIcon";
import SuccessIcon from "@/svgs/SuccessIcon";
import ThArrowDown from "@/svgs/ThArrowDown";
import Image from "next/image";

type Props = {
  headers: string[];
  users: {
    avator: string;
    name: string;
    id: string;
    email: string;
    type: string;
    status: string;
    action: string;
  }[];
};

const Table = ({ headers, users }: Props) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-gray-500">
          {headers.map((header) => (
            <td key={header} className="px-4 py-3">
              <span className="flex items-center gap-2">
                {header} <ThArrowDown />
              </span>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="px-4 py-3 bg-sidebar-white rounded-l-[12px]">
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-[37px] h-[38px] bg-[#F3F6F9] rounded-[12px] flex justify-center items-end overflow-hidden">
                  <Image
                    className="w-[31px] h-[31px]"
                    src={`/${user.avator}`}
                    alt={user.name}
                    width={31}
                    height={31}
                    priority
                  />
                </span>
                {user.name}
              </div>
            </td>
            <td className="px-4 py-3 bg-sidebar-white font-semibold   ">
              {user.id}
            </td>
            <td className="px-4 py-3 bg-sidebar-white font-semibold   ">
              {user.email}
            </td>
            <td className="px-4 py-3 bg-sidebar-white font-semibold   ">
              {user.type}
            </td>
            <td className="px-4  bg-sidebar-white ">
              <span
                className={`${
                  user.status === "Active"
                    ? "bg-button-success-bg text-button-success-text"
                    : "bg-button-error-bg text-button-error-text"
                } rounded-md font-semibold px-4 py-2`}
              >
                {user.status}
              </span>
            </td>
            <td className="px-4 py-3 bg-sidebar-white rounded-r-[12px]">
              {user.action === "ok" ? <SuccessIcon /> : <BlockedIcon />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
