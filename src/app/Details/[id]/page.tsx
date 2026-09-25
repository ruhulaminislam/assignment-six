
import AddTodayPlanButton from "@/compunents/Buttons/AddTodayPlanButton";
import SaveForLater from "@/compunents/Buttons/SaveForLater";
import { FaceAllData } from "@/lib/FaceAllData";
import { IData } from "@/types/AlldataTypes";
import Image from "next/image";
import React from "react";

interface Idprops {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: Idprops) => {
  const { id } = await params;

  const data = await FaceAllData();

  const datas = data.find((data: IData) => data.id === Number(id));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0 mt-10 sm:mt-14 lg:mt-[70px] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

      {/* Image */}
      <div className="col-span-1 lg:col-span-6">
        <Image
          className="w-full h-[400px] sm:h-[550px] lg:h-[800px] rounded-3xl object-cover"
          src={datas.image}
          alt="hero"
          width={500}
          height={500}
        />
      </div>

      {/* Details */}
      <div className="col-span-1 lg:col-span-6">

        <h1 className="text-[#FFFFFF] font-bold text-3xl sm:text-4xl pb-4">
          {datas.name}
        </h1>

        <p className="text-[#9CA3AF]">
          {datas.description}
        </p>

        {/* Muscle Groups */}
        <div className="flex gap-2 sm:gap-3 items-center flex-wrap py-5 sm:py-6">
          <p className="bg-[#CCFF00] px-4 rounded-2xl text-[#0F1115]">
            {datas.muscleGroups[0]}
          </p>

          <p className="bg-[#CCFF00] px-4 rounded-2xl text-[#0F1115]">
            {datas.muscleGroups[1]}
          </p>

          <p className="bg-[#CCFF00] px-4 rounded-2xl text-[#0F1115]">
            {datas.muscleGroups[2]}
          </p>
        </div>

        {/* Information */}
        <div className="bg-[#151922] rounded-2xl text-[#9CA3AF] border border-[#232834]">

          <div className="flex justify-between items-center gap-4 p-4 sm:p-5">
            <p>EQUIPMENT</p>
            <p className="text-right">{datas.equipment}</p>
          </div>

          <hr className="border-[#3D3F45] w-full" />

          <div className="flex justify-between items-center gap-4 p-4 sm:p-5">
            <p>DIFFICULTY</p>
            <p className="text-right">{datas.difficulty}</p>
          </div>

          <hr className="border-[#3D3F45] w-full" />

          <div className="flex justify-between items-center gap-4 p-4 sm:p-5">
            <p>SETS</p>
            <p>{datas.sets}</p>
          </div>

          <hr className="border-[#3D3F45] w-full" />

          <div className="flex justify-between items-center gap-4 p-4 sm:p-5">
            <p>REPS</p>
            <p>{datas.reps}</p>
          </div>

          <hr className="border-[#3D3F45] w-full" />

          <div className="flex justify-between items-center gap-4 p-4 sm:p-5">
            <p>DURATION</p>
            <p>{`${datas.duration} min`}</p>
          </div>

          <hr className="border-[#3D3F45] w-full" />

          <div className="flex justify-between items-center gap-4 p-4 sm:p-5">
            <p>CALORIES</p>
            <p>{`${datas.caloriesBurned} kcal`}</p>
          </div>

          <hr className="border-[#3D3F45] w-full" />

          <div className="flex justify-between items-center gap-4 p-4 sm:p-5">
            <p>RATING</p>
            <p>{datas.rating}</p>
          </div>

        </div>

        {/* Instructions */}
        <div>
          <h3 className="text-[#FFFFFF] py-5">
            INSTRUCTIONS
          </h3>

          <ol className="list-decimal pl-5 space-y-4">
            <li>{datas.instructions[0]}</li>
            <li>{datas.instructions[1]}</li>
            <li>{datas.instructions[2]}</li>
            <li>{datas.instructions[3]}</li>
          </ol>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
            <AddTodayPlanButton datas={datas} />
            <SaveForLater datas={datas} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;

