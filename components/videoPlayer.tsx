"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type VideoPlayerProps = {
  src: string;
  posterSrc?: string;
  heightClass?: string;
};

export default function VideoPlayer({
  src,
  posterSrc,
  heightClass = "h-[250px] lg:h-[316px] xl:h-[450px]",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    videoRef.current.play();
    setTimeout(() => {
      setIsPlaying(true);
    }, 150);
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative group">

      {/* VIDEO */}
      <video
        ref={videoRef}
        className={`
          w-full
          ${heightClass}
          rounded-xl
          object-cover
          bg-black
        `}
        preload="metadata"
        playsInline
        poster={posterSrc}
        controls={isPlaying}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="overlay"
            onClick={handlePlay}
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="
             absolute inset-0
             flex items-end justify-center
             pb-6
             bg-obsidian/20
             rounded-xl
             cursor-pointer
           ">
            {/* PLAY BUTTON WRAPPER */}
            <div className="relative flex items-center justify-center">

              {/* MAIN PLAY BUTTON */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative
                  w-12 h-12
                  bg-cream/20
                  rounded-full
                  flex items-center justify-center
                  shadow-lg
                  transition
                ">
                <Play
                  className="text-cream/40 fill-cream/40 ml-1"
                  size={20}
                />
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}