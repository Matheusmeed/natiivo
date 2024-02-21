import React, { useEffect } from 'react';

interface ImagePreloaderProps {
  imageSources: string[];
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ imageSources }) => {
  useEffect(() => {
    imageSources.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [imageSources]);

  return null;
};

export default ImagePreloader;
