
"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import PlanCount from "../counts/PlanCount";
import SavedCount from "../counts/SavedCount";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto px-4 sm:px-6  py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              className="h-[30px] w-[30px] sm:h-[32px] sm:w-[32px]"
              src={logo}
              alt="logo"
              width={100}
              height={100}
            />

            <h1 className="font-bold text-base sm:text-lg">
              FITLOG
            </h1>
          </div>

          {/* Navigation */}
          <ul className="flex gap-1 sm:gap-2 md:gap-4 items-center order-3 sm:order-2 w-full sm:w-auto justify-center">
            <Link
              className={
                pathname === "/"
                  ? "bg-[#1A2312] text-[#C2F800] py-2 px-3 sm:px-4 rounded-3xl"
                  : "py-2 px-3 sm:px-4"
              }
              href="/"
            >
              <li>Workouts</li>
            </Link>

            <Link
              className={
                pathname === "/MyPlan"
                  ? "bg-[#1A2312] text-[#C2F800] py-2 px-3 sm:px-4 rounded-3xl"
                  : "py-2 px-3 sm:px-4"
              }
              href="/MyPlan"
            >
              <li>My Plan</li>
            </Link>
          </ul>

          {/* Counts */}
          <ul className="flex gap-2 sm:gap-3 items-center order-2 sm:order-3">
            <PlanCount />
            <SavedCount />
          </ul>

        </div>
      </div>

      <hr className="border-[#3D3F45] w-full" />
    </nav>
  );
};

export default Navbar;


