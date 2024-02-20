import { useState } from 'react';
import { GradientWrapper, Wrapper } from '../Login/styles';
import Content from './components/Content';
import SideBar from './components/SideBar';
import { HomeDiv } from './styles';

const HomePage: React.FC = () => {
  const [showProperties, setShowProperties] = useState(false);
  const [background, setBackground] = useState('');

  const changeBackground = (newBackground: string) => {
    setBackground(newBackground);
  };

  return (
    <div>
      <Wrapper background={background}>
        {!background && (
          <video src='/videos/video_background.mp4' autoPlay muted loop></video>
        )}
        <GradientWrapper>
          <HomeDiv>
            <SideBar showProperties={showProperties} />
            <Content
              changeBackground={changeBackground}
              setShowProperties={setShowProperties}
              showProperties={showProperties}
            />
          </HomeDiv>
        </GradientWrapper>
      </Wrapper>
    </div>
  );
};

export default HomePage;
