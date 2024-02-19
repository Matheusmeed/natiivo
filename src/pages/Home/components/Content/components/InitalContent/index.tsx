import { TitleDiv } from './styles';
import StartExperience from '../../../../../../shared/components/StartExperience';
import CopyRight from '../../../../../../shared/components/CopyRight';

const InitialContent: React.FC = () => {
  return (
    <>
      <TitleDiv>
        <h1>INNOVATION IN YOUR HANDS</h1>
        <p>
          Explore, Interact and Transform the Real Estate Market with Our Smart
          Interactive Table.
        </p>
        <StartExperience isAtHome />
      </TitleDiv>
      <CopyRight isAtRight />
    </>
  );
};

export default InitialContent;
