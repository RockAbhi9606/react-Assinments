import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <main className="w-screen aspect-video pt-[25%] px-12 absolute bg-gradient-to-r from-black text-white">
        <div className="text-4xl font-semibold">{title}</div>
        <div className="text-base w-1/2 pt-4">{overview}</div>
        <div className="mt-8 flex gap-3">
          <button className="bg-white text-black font-semibold rounded-lg py-2 px-8 flex gap-2 items-center">
            <i className="fa-solid fa-play"></i>
            <label className="cursor-pointer">Play</label>
          </button>
          <button className="bg-white bg-opacity-50 text-black font-semibold rounded-lg py-2 px-8 flex gap-2 items-center">
            <i className="fa-solid fa-circle-info"></i>
            <label className="cursor-pointer">More Info</label>
          </button>
        </div>
      </main>
    </div>
  );
};

export default VideoTitle;
