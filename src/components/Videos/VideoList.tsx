import React, { useEffect, useState } from "react";
import { Video } from "./InterfaceVideo";
import * as videoService from "./VideoService";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await videoService.getAllVideos();
    setVideos(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      {videos.map((video, index) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
};

export default VideoList;
