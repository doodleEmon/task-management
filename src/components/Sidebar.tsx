"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarComp = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex flex-col gap-3 mt-2 p-2">
        <Link href="/">
          <li className={`p-2 font-bold rounded ${pathname === "/" ? "bg-blue-600" : "bg-gray-700"}`}>
            Tasks
          </li>
        </Link>
        <Link href="/users">
          <li className={`p-2 font-bold rounded ${pathname === "/users" ? "bg-blue-600" : "bg-gray-700"}`}>
            Users
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarComp;