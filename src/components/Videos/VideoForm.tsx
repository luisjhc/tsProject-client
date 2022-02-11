import React, { ChangeEvent, useState } from "react";
import { Video } from "./InterfaceVideo";
import * as videoService from "./VideoService";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  // const navigate = useNavigate();

  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await videoService.createVideo(video);
    toast.success("New video added");
    setVideo({ title: "", description: "", url: "" });
    // navigate("/");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group p-1">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group p-1">
                <input
                  type="text"
                  name="url"
                  placeholder="Url for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group p-1">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>
              <button className="btn btn-primary">Create Video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
