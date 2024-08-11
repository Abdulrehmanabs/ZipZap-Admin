import { useState } from "react";
import Table from "./Table";
import { usePathname } from "next/navigation";

const dummyUsers = [
  {
    avator: "boy.svg",
    name: "Albert Flores",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Job Seeker",
    status: "Active",
    action: "Blocked",
  },
  {
    avator: "cody-girl.svg",
    name: "Cody Fisher",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Recruiter",
    status: "Blocked",
    action: "ok",
  },
  {
    avator: "miles-boy.svg",
    name: "Floyd Miles",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Job Seeker",
    status: "Active",
    action: "Blocked",
  },
  {
    avator: "wilson-girl.svg",
    name: "Jenny Wilson",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Recruiter",
    status: "Blocked",
    action: "ok",
  },
  {
    avator: "boy.svg",
    name: "Robert Fox",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Recruiter",
    status: "Active",
    action: "Blocked",
  },
  {
    avator: "cody-girl.svg",
    name: "Arlene McCoy",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Job Seeker",
    status: "Blocked",
    action: "ok",
  },
  {
    avator: "miles-boy.svg",
    name: "Wade Warren",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Recruiter",
    status: "Active",
    action: "Blocked",
  },
  {
    avator: "wilson-girl.svg",
    name: "Jane Cooper",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Job Seeker",
    status: "Blocked",
    action: "ok",
  },
  {
    avator: "boy.svg",
    name: "Dianne Russell",
    id: "87364523",
    email: "brooklyns@mail.com",
    type: "Job Seeker",
    status: "Active",
    action: "Blocked",
  },
];

const headers = ["Name", "ID", "Email", "Type", "Status", "Action"];

const Users = ({ filter }: { filter: string }) => {
  const pathname = usePathname();
  const [users, setUsers] = useState(dummyUsers);
  return (
    <div className="p-6">
      <h2 className="font-semibold text-2xl">
        List of {filter ? filter : "..."}
      </h2>
      <div className="text-gray-500">
        Total Users :{" "}
        {
          // pathname == "/" ? users.slice(0, 3).length :
          users.filter((user) =>
            filter == "Users" || filter == "All Users"
              ? true
              : filter == "Job Seekers"
              ? user.type == "Job Seeker"
              : filter == "Recruiters"
              ? user.type == "Recruiter"
              : filter == "Blocked"
              ? user.status == "Blocked"
              : null
          ).length
        }
      </div>
      {/* table */}
      <Table
        headers={headers}
        users={pathname == "/" ? users.slice(0, 3) : users}
        filter={filter}
      />
    </div>
  );
};

export default Users;
