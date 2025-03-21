import React from "react";

interface VideoPlayerProps {
  videoLink: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink, className }) => {
  return (
    <div
      className={`relative aspect-video w-full max-w-[400px] md:max-w-[995px]  mx-auto overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <iframe
        src={videoLink}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default VideoPlayer;
