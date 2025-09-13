import React from "react";

const NoticeBar = () => {
  return (
    <div className="w-full text-white bg-red-500 lg:pt-10 pt-3 pb-2 overflow-hidden">
      <div className="container mx-auto animate-marquee">
        <div className="flex  items-center space-x-2 whitespace-nowrap">
  
          {/* Text */}
          <p className="text-sm sm:text-base md:text-lg">
            <span className="bg-white  px-2 py-1 rounded-lg font-semibold text-black">
             📢 Notice:
            </span>{" "}
            Please Pay September Month Internet Bill Within 15 September, 2025.
            During Electricity Issue Network Can Be Down For Few Moments In This
            Week.🚧Website Under Construction.🚧
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
