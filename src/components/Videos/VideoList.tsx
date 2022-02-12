import React, { useEffect, useState } from "react";
import { Video } from "./InterfaceVideo";
import * as videoService from "./VideoService";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await videoService.getAllVideos();

    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <>
      <h4 className="text-center mb-4">
        CLICK THE TITLE TO UPDATE THE VIDEO OR 'X' TO DELETE
      </h4>
      <div className="row">
        {videos.map((video) => {
          return (
            <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
          );
        })}
      </div>
    </>
  );
};

export default VideoList;
