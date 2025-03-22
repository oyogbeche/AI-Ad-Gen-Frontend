import React from "react";

interface VideoPlayerProps {
  videoLink: string;
  className?: string;
  loop?: boolean; // Optional prop to enable looping
  disableRelatedVideos?: boolean; // Optional prop to disable related videos
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoLink,
  className,
  loop = false,
  disableRelatedVideos = false,
}) => {
  // Construct the URL with optional parameters
  let url = videoLink;
  if (loop) {
    const videoId = videoLink.split("/embed/")[1].split("?")[0]; // Extract video ID
    url += `?loop=1&playlist=${videoId}`;
  }
  if (disableRelatedVideos) {
    url += loop ? "&rel=0" : "?rel=0";
  }

  return (
    <div
      className={`relative aspect-video w-full max-w-full sm:max-w-[400px] md:max-w-[995px] mx-auto overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <iframe
        src={url}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default VideoPlayer;