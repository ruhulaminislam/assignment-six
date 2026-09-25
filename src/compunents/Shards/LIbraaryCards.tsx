
import { IData } from "@/types/AlldataTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { LuFlame } from "react-icons/lu";
import { MdOutlineStarBorder } from "react-icons/md";

const LIbraaryCards = ({ data }: { data: IData }) => {
  return (
    <Link href={`/Details/${data.id}`}>

      <div className="bg-[#15171D] rounded-3xl overflow-hidden">

        <Image
          className="object-cover w-full h-[220px] sm:h-[260px] lg:h-[300px]"
          src={data.image}
          alt="hero"
          width={300}
          height={300}
        />

        <div className="p-4 sm:p-5 space-y-4">

          <div className="flex gap-2 sm:gap-3 items-center flex-wrap">

            <h3 className="bg-[#C2F800] px-3 rounded-2xl text-[#000000]">
              {data.muscleGroups[0]}
            </h3>

            <h3 className="bg-[#C2F800] px-3 rounded-2xl text-[#000000]">
              {data.muscleGroups[1]}
            </h3>

            <h3 className="bg-[#C2F800] px-3 rounded-2xl text-[#000000]">
              {data.muscleGroups[2]}
            </h3>

          </div>

          <div>
            <h3 className="text-[#FFFFFF] font-bold text-xl sm:text-2xl">
              {data.name}
            </h3>

            <p className="text-[#9CA3AF]">
              {data.equipment}
            </p>
          </div>

          <hr />

          <div className="flex gap-3 items-center flex-wrap">

            <p className="flex items-center gap-2">
              <IoMdTime />
              {`${data.duration} min`}
            </p>

            <p className="flex items-center gap-2">
              <LuFlame />
              {`${data.caloriesBurned} kcal`}
            </p>

            <p className="flex items-center gap-2">
              <MdOutlineStarBorder />
              {data.rating}
            </p>

          </div>

        </div>

      </div>

    </Link>
  );
};

export default LIbraaryCards;

