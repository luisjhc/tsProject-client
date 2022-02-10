import axios from "axios";

export const getAllVideos = async () => {
  return await axios.get("http://localhost:5000/videos");
};
