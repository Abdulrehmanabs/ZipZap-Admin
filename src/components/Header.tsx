import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 flex justify-between bg-sidebar-white shadow-sm">
      <span className="text-2xl font-light  uppercase border-r-2 border-r-gray-200 px-6 py-4 pr-10">
        {pathname == "/" && "Overview"}
        {pathname == "/users" && "Users"}
        {pathname == "/analytics" && "Analytics"}
        {pathname == "/reports" && "Reports"}
      </span>
      <div
        onClick={() => {
          console.log("Admin");
        }}
        className="flex items-center gap-4 px-6 cursor-pointer"
      >
        Admin
        <Image
          className="w-[46px] h-[46px] rounded-full"
          src={true ? "/AdminAvator.jpg" : "https://i.pravatar.cc/300"}
          alt="Next.js Logo"
          width={46}
          height={46}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
