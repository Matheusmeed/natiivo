import { useState } from 'react';
import SquareDots from './components/SquareDots';
import {
  BottomOptions,
  SelectionButton,
  SelectionDiv,
  Wrapper,
} from './styles';
import { FaPowerOff, FaPlus } from 'react-icons/fa6';
import { IoMdHelpCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type OptionsType =
  | '360'
  | 'return'
  | 'chart'
  | 'video'
  | 'gallery'
  | 'location';
const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<OptionsType>('360');

  const changeSelectedOption = (newOption: OptionsType) => {
    setSelectedOption(newOption);
  };

  return (
    <Wrapper>
      <SelectionDiv>
        <SelectionButton
          isSelected={selectedOption === '360'}
          onClick={() => {
            changeSelectedOption('360');
          }}
        >
          <img src='/images/icon/360.png' alt='360' />
        </SelectionButton>
        <SquareDots />
        <SelectionButton
          isSelected={selectedOption === 'return'}
          onClick={() => {
            changeSelectedOption('return');
          }}
        >
          <img src='/images/icon/return.png' alt='return' />
        </SelectionButton>
        <SquareDots />
        <SelectionButton
          isSelected={selectedOption === 'chart'}
          onClick={() => {
            changeSelectedOption('chart');
          }}
        >
          <img
            src='/images/icon/chart.png'
            alt='chart'
            style={{ marginRight: 1 }}
          />
        </SelectionButton>
        <SquareDots />
        <SelectionButton
          isSelected={selectedOption === 'location'}
          onClick={() => {
            changeSelectedOption('location');
          }}
        >
          <img src='/images/icon/location.png' alt='location' />
        </SelectionButton>
        <SquareDots />
        <SelectionButton
          isSelected={selectedOption === 'gallery'}
          onClick={() => {
            changeSelectedOption('gallery');
          }}
        >
          <img src='/images/icon/gallery.png' alt='gallery' />
        </SelectionButton>
        <SquareDots />
        <SelectionButton
          isSelected={selectedOption === 'video'}
          onClick={() => {
            changeSelectedOption('video');
          }}
        >
          <img src='/images/icon/video.png' alt='video' />
        </SelectionButton>
      </SelectionDiv>
      <BottomOptions>
        <button>
          <IoMdHelpCircle color='#9C9C9C' size={20} />
          <p>HELP</p>
        </button>
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          <FaPowerOff color='#9C9C9C' size={18} />
          <p>LOGOUT</p>
        </button>
      </BottomOptions>
    </Wrapper>
  );
};

export default SideBar;
