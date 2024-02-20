import React, { useState } from 'react';
import AppRouter from './routes/AppRouter';
import ImagePreloader from './shared/util/imagePreloader';
import { usedImagesPath } from './shared/util/usedImagesPath';
import VideoPreloader from './shared/util/videoPreLoader';
import LoadingSpinner from './shared/components/LoadingSpinner';

const App: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div>
      {!isVideoLoaded && <LoadingSpinner />}
      {isVideoLoaded && (
        <>
          <AppRouter />
        </>
      )}
      <VideoPreloader
        videoSource={'/videos/video_background.mp4'}
        onLoaded={handleVideoLoaded}
      />
      <ImagePreloader imageSources={usedImagesPath} />
    </div>
  );
};

export default App;
