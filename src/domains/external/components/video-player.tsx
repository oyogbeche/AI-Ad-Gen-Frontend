import { motion } from "framer-motion";
import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface VideoPlayerProps {
  videoLink: string;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink, className }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={videoLink}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
