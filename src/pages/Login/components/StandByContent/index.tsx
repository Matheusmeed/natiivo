import { ContentDiv, StartDiv } from './styles';
import { HiArrowNarrowRight } from 'react-icons/hi';

const StandByContent = ({ openLogin }: { openLogin: () => void }) => {
  return (
    <ContentDiv>
      <img src='/images/logo/natiivoLogo.png' alt='natiivo logo' />
      <StartDiv>
        <h3>START EXPERIENCE</h3>
        <button
          onClick={() => {
            openLogin();
          }}
        >
          <HiArrowNarrowRight color='#FFFFFF' size={'100%'} />
        </button>
      </StartDiv>
    </ContentDiv>
  );
};

export default StandByContent;
