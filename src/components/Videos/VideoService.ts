import axios from "axios";
import { Video } from "./InterfaceVideo";

const API = process.env.SERVER || "http://localhost:5000";

export const getAllVideos = async () => {
  return await axios.get<Video[]>(`${API}/videos`);
};

export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
};

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${API}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
  return await axios.put<Video>(`${API}/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
  return await axios.delete<Video>(`${API}/videos/${id}`);
};
