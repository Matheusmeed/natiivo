import { ContentDiv, GradientWrapper, StartDiv, Wrapper } from './styles';
import { HiArrowNarrowRight } from 'react-icons/hi';

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <GradientWrapper>
        <ContentDiv>
          <img src='/images/logo/natiivoLogo.png' alt='natiivo logo' />
          <StartDiv>
            <h3>START EXPERIENCE</h3>
            <button>
              <HiArrowNarrowRight color='#FFFFFF' size={'100%'} />
            </button>
          </StartDiv>
        </ContentDiv>
      </GradientWrapper>
    </Wrapper>
  );
};

export default LoginPage;
