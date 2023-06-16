import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  return (
    <div>
      <Link to={`/video/${id.videoId}`}>
        <img
          className="w-full"
          src={snippet.thumbnails.high.url}
          alt="thubnail"
        />
        <div className="p-3">
          <h1 className="font-medium">{snippet.title}</h1>
          <p>{snippet.channelTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
