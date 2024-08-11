import LogoutIcon from "@/svgs/sidebar/LogoutIcon";
import AnalyticsIcon from "@/svgs/sidebar/AnalyticsIcon";
import DashboardIcon from "@/svgs/sidebar/DashboardIcon";
import MenuIcon from "@/svgs/sidebar/MenuIcon";
import ReportsIcon from "@/svgs/sidebar/ReportsIcon";
import UsersIcon from "@/svgs/sidebar/UsersIcon";
import ZipzapAdminLogo from "@/svgs/sidebar/ZipzapAdminLogo";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
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
        onClick={() => {
          router.push("/");
        }}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/" && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <DashboardIcon selected={pathname == "/"} />
        {open && "Dashboard"}
      </div>
      <div
        onClick={() => {
          router.push("/users");
        }}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/users" && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <UsersIcon selected={pathname == "/users"} />
        {open && "Users"}
      </div>

      <div
        onClick={() => {
          router.push("/reports");
        }}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/reports" && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <ReportsIcon selected={pathname == "/reports"} />
        {open && "Reports"}
      </div>
      <div
        onClick={() => {
          router.push("/analytics");
        }}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          // selected == 3 &&
          pathname == "/analytics" && "bg-sidebar-white text-sidebar-green"
        } cursor-pointer`}
      >
        <AnalyticsIcon selected={pathname == "/analytics"} />
        {open && "Analytics"}
      </div>

      <div
        onClick={() => {
          localStorage.removeItem("user");
          window.location.reload();
        }}
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
