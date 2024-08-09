import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <Link
      to={"/watch?v=" + info.id}
      className="w-72 p-2 mt-8 cursor-pointer shadow-lg rounded-lg"
    >
      <img
        className="rounded-lg w-full h-auto"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="flex flex-col">
        <div className="mt-2 flex">
          <img
            className="bg-gray-500 rounded-full border h-10 w-10 mr-4 mt-2"
            src={thumbnails?.default?.url}
            alt="default"
          />
          <span className="font-semibold text-sm overflow-wrap">{title}</span>
        </div>
        <div className="ml-14 mt-2 flex flex-col">
          <span>{channelTitle}</span>
          <span>{statistics?.viewCount} views</span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
