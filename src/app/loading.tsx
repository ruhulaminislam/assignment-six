import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0">

      {/* Hero Skeleton */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-8 lg:p-12 mt-10 sm:mt-14 lg:mt-[70px] bg-[#15171D] rounded-4xl animate-pulse">

        {/* Hero Text */}
        <div className="w-full lg:w-1/2 space-y-5">
          <div className="h-5 w-36 bg-[#2D313B] rounded"></div>

          <div className="space-y-3">
            <div className="h-10 sm:h-12 w-full max-w-[500px] bg-[#2D313B] rounded"></div>
            <div className="h-10 sm:h-12 w-4/5 bg-[#2D313B] rounded"></div>
          </div>

          <div className="space-y-2 max-w-[450px]">
            <div className="h-4 w-full bg-[#2D313B] rounded"></div>
            <div className="h-4 w-11/12 bg-[#2D313B] rounded"></div>
            <div className="h-4 w-3/4 bg-[#2D313B] rounded"></div>
          </div>

          <div className="h-12 w-44 bg-[#2D313B] rounded-lg"></div>
        </div>

        {/* Hero Image */}
        <div className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-[#2D313B] rounded-3xl"></div>
      </div>


      {/* Library Heading Skeleton */}
      <div className="mt-10 sm:mt-14 lg:mt-[70px] space-y-3 animate-pulse">
        <div className="h-10 w-52 bg-[#2D313B] rounded"></div>
        <div className="h-5 w-80 max-w-full bg-[#2D313B] rounded"></div>
      </div>


      {/* Library Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-10 mt-10 sm:mt-12 lg:mt-[70px]">

        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#15171D] rounded-3xl overflow-hidden animate-pulse"
          >

            {/* Image */}
            <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] bg-[#2D313B]"></div>

            <div className="p-4 sm:p-5 space-y-4">

              {/* Tags */}
              <div className="flex gap-2 sm:gap-3">
                <div className="h-6 w-16 bg-[#2D313B] rounded-2xl"></div>
                <div className="h-6 w-16 bg-[#2D313B] rounded-2xl"></div>
                <div className="h-6 w-16 bg-[#2D313B] rounded-2xl"></div>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <div className="h-7 w-4/5 bg-[#2D313B] rounded"></div>
                <div className="h-5 w-2/3 bg-[#2D313B] rounded"></div>
              </div>

              <hr className="border-[#2D313B]" />

              {/* Stats */}
              <div className="flex gap-3">
                <div className="h-5 w-20 bg-[#2D313B] rounded"></div>
                <div className="h-5 w-20 bg-[#2D313B] rounded"></div>
                <div className="h-5 w-12 bg-[#2D313B] rounded"></div>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Loading;