import { useState } from 'react';
import {
  BodyDiv,
  HeaderDiv,
  InteractiveButton,
  LogoDiv,
  NavigationDiv,
  NavigationOption,
  Wrapper,
} from './styles';
import InitialContent from './components/InitalContent';
import { BsPlusLg } from 'react-icons/bs';
import { PiMinusThin } from 'react-icons/pi';
import Properties from './components/Properties';

type OptionsType = 'HOME' | 'PROJECT' | 'SALES';
const Content: React.FC<{
  setShowProperties: React.Dispatch<React.SetStateAction<boolean>>;
  changeBackground: (newBackground: string) => void;
  showProperties: boolean;
}> = ({ showProperties, setShowProperties, changeBackground }) => {
  const [selectedOption, setSelectedOption] = useState<OptionsType>('HOME');

  const changeSelectedOption = (newOption: OptionsType) => {
    setSelectedOption(newOption);
  };

  return (
    <Wrapper>
      <InteractiveButton
        onClick={() => {
          setShowProperties((prevState) => !prevState);
        }}
      >
        {showProperties ? (
          <PiMinusThin color='#FFFFFF' size={20} />
        ) : (
          <BsPlusLg color='#FFFFFF' size={20} />
        )}
      </InteractiveButton>
      <HeaderDiv>
        <NavigationDiv>
          <NavigationOption
            isSelected={selectedOption === 'HOME'}
            onClick={() => {
              changeSelectedOption('HOME');
            }}
          >
            HOME
          </NavigationOption>
          <NavigationOption
            isSelected={selectedOption === 'PROJECT'}
            onClick={() => {
              changeSelectedOption('PROJECT');
            }}
          >
            PROJECT
          </NavigationOption>
          <NavigationOption
            isSelected={selectedOption === 'SALES'}
            onClick={() => {
              changeSelectedOption('SALES');
            }}
          >
            SALES
          </NavigationOption>
        </NavigationDiv>
        <LogoDiv>
          <img src='/images/util/profile.png' alt='profile' />
          <img src='/images/util/natiivoText.png' alt='natiivo' />
        </LogoDiv>
      </HeaderDiv>
      <BodyDiv>
        {!!showProperties ? (
          <Properties changeBackground={changeBackground} />
        ) : (
          <InitialContent />
        )}
      </BodyDiv>
    </Wrapper>
  );
};

export default Content;
