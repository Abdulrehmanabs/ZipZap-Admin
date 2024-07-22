import Image from "next/image";
import React from "react";

const Header = ({ selected }: { selected: number }) => {
  return (
    <div className="sticky top-0 z-20 flex justify-between bg-sidebar-white shadow-sm">
      <span className="text-2xl font-light  uppercase border-r-2 border-r-gray-200 px-6 py-4 pr-10">
        {selected == 1 && "Overview"}
        {selected == 2 && "Users"}
        {selected == 3 && "Analytics"}
        {selected == 4 && "Reports"}
      </span>
      <div className="flex items-center gap-4 px-6">
        Admin
        <Image
          className="w-[46px] h-[46px] rounded-full"
          src="/AdminAvator.jpg"
          alt="Next.js Logo"
          width={46}
          height={46}
          priority
        />
      </div>
    </div>
  );
};

export default Header;
