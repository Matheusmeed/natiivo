import { GradientWrapper, Wrapper } from '../Login/styles';
import Content from './components/Content';
import SideBar from './components/SideBar';
import { HomeDiv } from './styles';

const HomePage: React.FC = () => {
  return (
    <div>
      <Wrapper>
        <GradientWrapper>
          <HomeDiv>
            <SideBar />
            <Content />
          </HomeDiv>
        </GradientWrapper>
      </Wrapper>
    </div>
  );
};

export default HomePage;
