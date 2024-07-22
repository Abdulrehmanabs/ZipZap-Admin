import LogoutIcon from "@/svgs/sidebar/LogoutIcon";
import AnalyticsIcon from "@/svgs/sidebar/AnalyticsIcon";
import DashboardIcon from "@/svgs/sidebar/DashboardIcon";
import MenuIcon from "@/svgs/sidebar/MenuIcon";
import ReportsIcon from "@/svgs/sidebar/ReportsIcon";
import UsersIcon from "@/svgs/sidebar/UsersIcon";
import ZipzapAdminLogo from "@/svgs/sidebar/ZipzapAdminLogo";
import { useState } from "react";

type Props = {
  selected: number;
  setSelected: Function;
};
const Sidebar = ({ selected, setSelected }: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="bg-sidebar-green text-sidebar-white p-4  flex flex-col ">
      <div
        className={`flex items-center ${!open && "justify-center"} gap-6 mb-6`}
      >
        {open && (
          <div className="flex items-center gap-1 font-semibold text-nowrap">
            <ZipzapAdminLogo />
            ZipZap Admin
          </div>
        )}
        <MenuIcon open={open} setOpen={setOpen} />
      </div>
      <div
        onClick={() => setSelected(1)}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          selected == 1 && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <DashboardIcon selected={selected} />
        {open && "Dashboard"}
      </div>
      <div
        onClick={() => setSelected(2)}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          selected == 2 && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <UsersIcon selected={selected} />
        {open && "Users"}
      </div>

      <div
        onClick={() => setSelected(3)}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          selected == 3 && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <AnalyticsIcon selected={selected} />
        {open && "Analytics"}
      </div>
      <div
        onClick={() => setSelected(4)}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          selected == 4 && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <ReportsIcon selected={selected} />
        {open && "Reports"}
      </div>

      <div
        className={`flex items-center ${
          !open ? "justify-center" : "ms-4"
        } gap-6 mt-auto cursor-pointer`}
      >
        <LogoutIcon />
        {open && "Logout"}
      </div>
    </aside>
  );
};

export default Sidebar;
