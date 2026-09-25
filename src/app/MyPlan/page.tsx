
"use client";

import { FitContext } from "@/context/fitProvider";
import { IData } from "@/types/AlldataTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { LuFlame } from "react-icons/lu";
import { MdOutlineStarBorder } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const MYPLAN = () => {
  const {
    SavedFit,
    AddtoFit,
    setSavedFit,
    setAddtoFit,
  } = useContext(FitContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sort, setSort] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const sortedAddtoFit = [...AddtoFit].sort((a, b) => {
    if (sort === "duration") {
      return a.duration - b.duration;
    }

    if (sort === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sort === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const sortedSavedFit = [...SavedFit].sort((a, b) => {
    if (sort === "duration") {
      return a.duration - b.duration;
    }

    if (sort === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sort === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const duration = AddtoFit.reduce(
    (sum, data: IData) => sum + data.duration,
    0
  );

  const durations = SavedFit.reduce(
    (sum, data: IData) => sum + data.duration,
    0
  );

  const caloriesBurned = AddtoFit.reduce(
    (sum, data: IData) => sum + data.caloriesBurned,
    0
  );

  const caloriesBurneds = SavedFit.reduce(
    (sum, data: IData) => sum + data.caloriesBurned,
    0
  );

  return (
    <div className="container mx-auto mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-0">

      {/* Header */}
      <div>
        <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
          MY PLAN
        </h1>

        <p className="text-[#8A92A0] text-sm sm:text-base mb-4 sm:mb-6">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 p-4 sm:p-6 lg:p-7 border rounded-2xl mb-5">

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <h1 className="text-xs sm:text-sm lg:text-base">
            Exercises
          </h1>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#CCFF00]">
            {activeTab === "today"
              ? AddtoFit.length
              : SavedFit.length}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <h1 className="text-xs sm:text-sm lg:text-base">
            Minutes
          </h1>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {activeTab === "today" ? duration : durations}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <h1 className="text-xs sm:text-sm lg:text-base">
            Calories
          </h1>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {activeTab === "today"
              ? caloriesBurned
              : caloriesBurneds}
          </h1>
        </div>

      </div>

      {/* Tabs + Sort */}
      <div className="relative w-full">

        <div className="tabs tabs-box shadow-none bg-transparent">

          {/* Today Tab */}
          <input
            checked={activeTab === "today"}
            onChange={() => setActiveTab("today")}
            type="radio"
            name="my_tabs_6"
            className="tab text-xs sm:text-sm"
            aria-label="Today’s Plan"
          />

          {activeTab === "today" && (
            <div className="tab-content w-full p-2 sm:p-4 lg:p-6 space-y-4">

              {AddtoFit.length > 0 ? (
                sortedAddtoFit.map((data: IData) => (

                  <div
                    key={data.id}
                    className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-5 border border-[#232732] bg-[#14171E] rounded-2xl p-4 sm:p-5"
                  >

                    {/* Left */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center min-w-0">

                      <Image
                        className="w-full sm:w-[180px] lg:w-[200px] h-[180px] sm:h-[110px] lg:h-[120px] rounded-2xl object-cover shrink-0"
                        src={data.image}
                        alt="workout"
                        width={200}
                        height={120}
                      />

                      <div className="flex flex-col gap-2 sm:gap-3 min-w-0">

                        <h1 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl break-words">
                          {data.name}
                        </h1>

                        <p className="text-[#8A92A0] text-sm sm:text-base lg:text-xl">
                          {data.equipment}
                        </p>

                        <div className="flex flex-wrap gap-3 items-center text-sm sm:text-base">

                          <p className="flex items-center gap-2">
                            <IoMdTime className="text-[#CCFF00]" />
                            {`${data.duration} min`}
                          </p>

                          <p className="flex items-center gap-2">
                            <LuFlame className="text-[#CCFF00]" />
                            {`${data.caloriesBurned} kcal`}
                          </p>

                          <p className="flex items-center gap-2">
                            <MdOutlineStarBorder className="text-[#CCFF00]" />
                            {data.rating}
                          </p>

                        </div>

                      </div>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 items-stretch sm:items-center shrink-0">

                      <Link
                        href={`/Details/${data.id}`}
                        className="w-full sm:w-auto"
                      >
                        <button className="py-3 px-4 rounded-2xl border w-full whitespace-nowrap">
                          View Details
                        </button>
                      </Link>

                      <button className="bg-[#CCFF00] flex gap-2 items-center justify-center text-black py-3 px-4 rounded-2xl whitespace-nowrap">
                        <FaCheck />
                        Mark as Done
                      </button>

                      <button
                        onClick={() => {
                          setAddtoFit(
                            AddtoFit.filter(
                              (item) => item.id !== data.id
                            )
                          );

                          toast.success(`${data.name} Removed`);
                        }}
                        className="flex justify-center items-center"
                      >
                        <RxCross2 className="text-xl cursor-pointer" />
                      </button>

                    </div>

                  </div>

                ))
              ) : (
                <div className="flex flex-col items-center justify-center border border-dashed px-4 py-20 sm:py-[100px] bg-[#101216] rounded-2xl text-center">

                  <h1 className="text-white font-bold text-2xl sm:text-3xl">
                    NOTHING HERE YET
                  </h1>

                  <p className="text-[#ECF9FF] text-sm sm:text-base mt-2">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <button className="bg-[#C2F10D] py-3 px-4 rounded-2xl text-black mt-5">
                    Go to workouts
                  </button>

                </div>
              )}

            </div>
          )}

          {/* Saved Tab */}
          <input
            checked={activeTab === "saved"}
            onChange={() => setActiveTab("saved")}
            type="radio"
            name="my_tabs_6"
            className="tab text-xs sm:text-sm"
            aria-label="Saved"
          />

          {activeTab === "saved" && (
            <div className="tab-content w-full p-2 sm:p-4 lg:p-6 space-y-4">

              {SavedFit.length > 0 ? (
                sortedSavedFit.map((data: IData) => (

                  <div
                    key={data.id}
                    className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-5 border border-[#232732] bg-[#14171E] rounded-2xl p-4 sm:p-5"
                  >

                    {/* Left */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center min-w-0">

                      <Image
                        className="w-full sm:w-[180px] lg:w-[200px] h-[180px] sm:h-[110px] lg:h-[120px] rounded-2xl object-cover shrink-0"
                        src={data.image}
                        alt="workout"
                        width={200}
                        height={120}
                      />

                      <div className="flex flex-col gap-2 sm:gap-3 min-w-0">

                        <h1 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl break-words">
                          {data.name}
                        </h1>

                        <p className="text-[#8A92A0] text-sm sm:text-base lg:text-xl">
                          {data.equipment}
                        </p>

                        <div className="flex flex-wrap gap-3 items-center text-sm sm:text-base">

                          <p className="flex items-center gap-2">
                            <IoMdTime className="text-[#CCFF00]" />
                            {`${data.duration} min`}
                          </p>

                          <p className="flex items-center gap-2">
                            <LuFlame className="text-[#CCFF00]" />
                            {`${data.caloriesBurned} kcal`}
                          </p>

                          <p className="flex items-center gap-2">
                            <MdOutlineStarBorder className="text-[#CCFF00]" />
                            {data.rating}
                          </p>

                        </div>

                      </div>
                    </div>

                    {/* Right Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 items-stretch sm:items-center shrink-0">

                      <Link
                        href={`/Details/${data.id}`}
                        className="w-full sm:w-auto"
                      >
                        <button className="py-3 px-4 rounded-2xl border w-full whitespace-nowrap">
                          View Details
                        </button>
                      </Link>

                      <button className="bg-[#CCFF00] flex gap-2 items-center justify-center text-black py-3 px-4 rounded-2xl whitespace-nowrap">
                        <FaCheck />
                        Mark as Done
                      </button>

                      <button
                        onClick={() => {
                          setSavedFit(
                            SavedFit.filter(
                              (item) => item.id !== data.id
                            )
                          );

                          toast.success(`${data.name} Removed`);
                        }}
                        className="flex justify-center items-center"
                      >
                        <RxCross2 className="text-xl cursor-pointer" />
                      </button>

                    </div>

                  </div>

                ))
              ) : (
                <div className="flex flex-col items-center justify-center border border-dashed px-4 py-20 sm:py-[100px] bg-[#101216] rounded-2xl text-center">

                  <h1 className="text-white font-bold text-2xl sm:text-3xl">
                    NOTHING HERE YET
                  </h1>

                  <p className="text-[#ECF9FF] text-sm sm:text-base mt-2">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <button className="bg-[#C2F10D] py-3 px-4 rounded-2xl text-black mt-5">
                    Go to workouts
                  </button>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value as
                | "duration"
                | "calories"
                | "rating"
            )
          }
          className="select select-success absolute right-0 top-5 -translate-y-1/2 w-[130px] sm:w-[150px] text-xs sm:text-sm"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

      </div>
    </div>
  );
};

export default MYPLAN;

