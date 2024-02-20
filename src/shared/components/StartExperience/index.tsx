import { StartDiv } from './styles';
import { HiArrowNarrowRight } from 'react-icons/hi';

const StartExperience = ({
  onStart,
  isAtHome,
}: {
  onStart?: () => void;
  isAtHome?: boolean;
}) => {
  return (
    <StartDiv isAtHome={!!isAtHome}>
      <h3>START EXPERIENCE</h3>
      <button
        onClick={() => {
          if (!!onStart) {
            onStart();
          }
        }}
      >
        <HiArrowNarrowRight color='#FFFFFF' size={'100%'} />
      </button>
    </StartDiv>
  );
};

export default StartExperience;
