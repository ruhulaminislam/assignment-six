
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] mt-10 sm:mt-12 lg:mt-[70px]">

      <hr className="border-[#3D3F45] w-full" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 container mx-auto px-4 sm:px-6 lg:px-0 py-5">

        <div className="flex items-center gap-3">
          <Image
            className="h-[30px] w-[30px]"
            src={logo}
            alt="logo"
            width={100}
            height={100}
          />

          <h3>FITLOG</h3>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-sm sm:text-base">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;

