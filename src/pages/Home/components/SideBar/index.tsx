import SquareDots from './components/SquareDots';
import { BottomOptions, SelectionDiv, Wrapper } from './styles';
import { FaPowerOff } from 'react-icons/fa6';
import { IoMdHelpCircle } from 'react-icons/io';

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <SelectionDiv>
        <button>
          <img src='/images/icon/360.png' alt='360' />
        </button>
        <SquareDots />
        <button>
          <img src='/images/icon/return.png' alt='360' />
        </button>
        <SquareDots />
        <button>
          <img
            src='/images/icon/chart.png'
            alt='360'
            style={{ marginRight: 1 }}
          />
        </button>
        <SquareDots />
        <button>
          <img src='/images/icon/location.png' alt='360' />
        </button>
        <SquareDots />
        <button>
          <img src='/images/icon/gallery.png' alt='360' />
        </button>
        <SquareDots />
        <button>
          <img src='/images/icon/video.png' alt='360' />
        </button>
      </SelectionDiv>
      <BottomOptions>
        <button>
          <IoMdHelpCircle color='#9C9C9C' size={20} />
          <p>HELP</p>
        </button>
        <button>
          <FaPowerOff color='#9C9C9C' size={18} />
          <p>LOGOUT</p>
        </button>
      </BottomOptions>
    </Wrapper>
  );
};

export default SideBar;
