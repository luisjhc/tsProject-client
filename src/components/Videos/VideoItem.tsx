import React from "react";
import { Video } from "./InterfaceVideo";

interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <h1>{video.title}</h1>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
