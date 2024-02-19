import { useState } from 'react';
import {
  BodyDiv,
  HeaderDiv,
  LogoDiv,
  NavigationDiv,
  NavigationOption,
  Wrapper,
} from './styles';
import InitialContent from './components/InitalContent';

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
        <InitialContent />
      </BodyDiv>
    </Wrapper>
  );
};

export default Content;
