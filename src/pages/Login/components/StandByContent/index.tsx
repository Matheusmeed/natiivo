import { ContentDiv, StartDiv } from './styles';
import { HiArrowNarrowRight } from 'react-icons/hi';

const StandByContent: React.FC = () => {
  return (
    <ContentDiv>
      <img src='/images/logo/natiivoLogo.png' alt='natiivo logo' />
      <StartDiv>
        <h3>START EXPERIENCE</h3>
        <button>
          <HiArrowNarrowRight color='#FFFFFF' size={'100%'} />
        </button>
      </StartDiv>
    </ContentDiv>
  );
};

export default StandByContent;
