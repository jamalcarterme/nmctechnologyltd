"use client";

import { useEffect, useRef, useState } from "react";

/** Full-bleed autoplaying background video, meant to sit behind hero content.
 * Shows a poster/fallback image until the video is ready, then crossfades in.
 * `startAt` lets the clip begin partway through instead of at 0s. */
export default function BackgroundVideo({
  src,
  fallbackImage,
  startAt = 0,
}: {
  src: string;
  fallbackImage: string;
  startAt?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const seekToStart = () => {
      if (startAt > 0 && video.currentTime < startAt) {
        try {
          video.currentTime = startAt;
        } catch {
          // ignore — some browsers throw until enough data is buffered
        }
      }
    };

    const markReady = () => setVideoReady(true);

    const attemptPlay = async () => {
      seekToStart();
      try {
        await video.play();
        markReady();
      } catch {
        // Autoplay was prevented, will play on first user interaction
      }
    };

    const handleLoadedMetadata = () => seekToStart();
    const handleCanPlay = () => attemptPlay();
    const handleLoadedData = () => markReady();

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("playing", markReady);

    if (video.readyState >= 2) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("playing", markReady);
    };
  }, [startAt]);

  return (
    <div className="pointer-events-none absolute inset-0">
      <img
        src={fallbackImage}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
