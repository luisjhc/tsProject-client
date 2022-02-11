import axios from "axios";
import { Video } from "./InterfaceVideo";

export const getAllVideos = async () => {
  return await axios.get("http://localhost:5000/videos");
};

export const createVideo = async (video: Video) => {
  return await axios.post("http://localhost:5000/videos", video);
};
