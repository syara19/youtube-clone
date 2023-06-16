import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./Utility/FetchApi";
import ReactPlayer from "react-player";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videoSugest, setVideoSugest] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );
    fetchApi(`search?part=id,snippet,&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideoSugest(data.items)
    );
  }, [id]);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="grow md:basis-9/12 lg:basis-8/12">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="h-full "
          width="100%"
        />
        <div className="p-4">
          <h1 className="text-lg font-normal">{videoDetail?.snippet.title}</h1>
          <p className="mb-4">{videoDetail?.statistics.viewCount} views</p>
          <hr />
          <p className="mt-4 mb-4">{videoDetail?.snippet.description}</p>
          <hr />
        </div>
      </div>
      <div className="grid grid-cols-1 md:p-3 md:basis-3/12 lg:basis-4/12 ">
        {videoSugest?.map((video, i) => {
          return <VideoCard key={i} video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
