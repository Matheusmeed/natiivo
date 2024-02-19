import { useState } from 'react';
import {
  BodyDiv,
  HeaderDiv,
  LogoDiv,
  NavigationDiv,
  NavigationOption,
  TitleDiv,
  Wrapper,
} from './styles';
import StartExperience from '../../../../shared/components/StartExperience';

type OptionsType = 'HOME' | 'PROJECT' | 'SALES';
const Content: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionsType>('HOME');

  const changeSelectedOption = (newOption: OptionsType) => {
    setSelectedOption(newOption);
  };

  return (
    <Wrapper>
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
        <TitleDiv>
          <h1>INNOVATION IN YOUR HANDS</h1>
          <p>
            Explore, Interact and Transform the Real Estate Market with Our
            Smart Interactive Table.
          </p>
          <StartExperience isAtHome />
        </TitleDiv>
      </BodyDiv>
    </Wrapper>
  );
};

export default Content;
