import React, { useEffect } from 'react';

interface VideoPreloaderProps {
  videoSource: string;
}

const VideoPreloader: React.FC<
  VideoPreloaderProps & { onLoaded?: () => void }
> = ({ videoSource, onLoaded }) => {
  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSource;
    video.load();

    video.addEventListener('loadeddata', () => {
      if (onLoaded) {
        onLoaded();
      }
    });
  }, [videoSource, onLoaded]);

  return null;
};

export default VideoPreloader;
