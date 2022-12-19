import React from "react";

const CustomLoading = () => {
  return (
    <div className="h-screen flex bg-slate-600 items-center justify-center flex-col">
      <div className=" w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin border-blue-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <p className="text-slate-200 text-3xl font-bold">Please wait</p>
    </div>
  );
};

export default CustomLoading;
