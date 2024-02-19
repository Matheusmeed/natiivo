import SquareDots from './components/SquareDots';
import { SelectionDiv, Wrapper } from './styles';

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
    </Wrapper>
  );
};

export default SideBar;
