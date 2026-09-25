
import { FaceAllData } from "@/lib/FaceAllData";
import { IData } from "@/types/AlldataTypes";
import React from "react";
import LIbraaryCards from "../Shards/LIbraaryCards";

const LIBRARY = async () => {
  const datas = await FaceAllData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0 mt-10 sm:mt-14 lg:mt-[70px]">

      <div id="library">
        <h1 className="text-[#FFFFFF] font-bold text-3xl sm:text-4xl">
          THE LIBRARY
        </h1>

        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-10 mt-10 sm:mt-12 lg:mt-[70px] rounded-3xl">
        {datas.map((data: IData) => {
          return (
            <div key={data.id}>
              <LIbraaryCards data={data}></LIbraaryCards>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default LIBRARY;


