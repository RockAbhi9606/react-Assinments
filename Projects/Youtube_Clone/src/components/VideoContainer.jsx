import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { YOUTUBE_VIDEO_API } from "../utilities/constant";
import { useSelector } from "react-redux";

function VideoContainer() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items);
  };
  return (
    <div
      className={`grid-cols-4 grid gap-4 w-full overflow-hidden overflow-y-auto h-screen scrollbar-none custom-height ${
        isMenuOpen ? "grid-cols-4" : "grid-cols-5"
      }`}
    >
      {videos.map((video) => {
        return <VideoCards key={video.id} info={video} />;
      })}
    </div>
  );
}

export default VideoContainer;
