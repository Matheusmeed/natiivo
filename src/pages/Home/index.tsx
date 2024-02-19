import { useState } from 'react';
import { GradientWrapper, Wrapper } from '../Login/styles';
import Content from './components/Content';
import SideBar from './components/SideBar';
import { HomeDiv } from './styles';

const HomePage: React.FC = () => {
  const [showProperties, setShowProperties] = useState(false);

  return (
    <div>
      <Wrapper>
        <GradientWrapper>
          <HomeDiv>
            <SideBar showProperties={showProperties} />
            <Content
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
