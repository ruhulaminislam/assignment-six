
const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0D0F12] flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">

        {/* Animated Loader */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-4 border-[#25282F]"></div>

          <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-[#C2F800] animate-spin"></div>

          <div className="absolute w-10 h-10 rounded-full bg-[#C2F800]/10 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#C2F800] animate-pulse"></div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-white text-2xl font-bold mt-7">
          Loading Exercises
        </h2>

        <p className="text-[#9CA3AF] mt-2 text-sm">
          Preparing your workout library...
        </p>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-5">
          <span className="w-2 h-2 rounded-full bg-[#C2F800] animate-bounce"></span>
          <span className="w-2 h-2 rounded-full bg-[#C2F800] animate-bounce [animation-delay:150ms]"></span>
          <span className="w-2 h-2 rounded-full bg-[#C2F800] animate-bounce [animation-delay:300ms]"></span>
        </div>

      </div>
    </div>
  );
};

export default Loading;

