import StartExperience from '../../../../shared/components/StartExperience';
import { ContentDiv } from './styles';

const StandByContent = ({ openLogin }: { openLogin: () => void }) => {
  return (
    <ContentDiv>
      <img src='/images/logo/natiivoLogo.png' alt='natiivo logo' />
      <StartExperience
        onStart={() => {
          openLogin();
        }}
      />
    </ContentDiv>
  );
};

export default StandByContent;
