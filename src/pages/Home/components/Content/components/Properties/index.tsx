import { BsPlusLg } from 'react-icons/bs';
import {
  BottomTitleDiv,
  Card,
  CardAddButton,
  CardBottom,
  CardDiv,
  Cards,
  LeftButton,
  Overlay,
  RightButton,
  SelectionButtons,
  TitleDiv,
  Wrapper,
} from './styles';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Properties: React.FC = () => {
  return (
    <>
      <Wrapper>
        <TitleDiv>
          <h1>360° BUILDING</h1>
          <p>View the building and availability</p>
          <button>
            <p>LET ME IN</p> <HiArrowNarrowRight style={{ marginBottom: 2 }} />
          </button>
        </TitleDiv>
        <CardDiv>
          <Cards>
            <Card isSelected>
              <img src='/images/properties/360.jpg' alt='360' />
              <Overlay />
              <CardBottom>
                <BottomTitleDiv>
                  <div>
                    <img src='/images/icon/360.png' alt='360' />
                  </div>
                  <p>BUILDING</p>
                </BottomTitleDiv>
                <CardAddButton>
                  <BsPlusLg color='#FFFFFF' size={26} />
                </CardAddButton>
              </CardBottom>
            </Card>
            <Card>
              <img src='/images/properties/360.jpg' alt='360' />
              <Overlay />
              <CardBottom>
                <BottomTitleDiv>
                  <div>
                    <img src='/images/icon/360.png' alt='360' />
                  </div>
                  <p>BUILDING</p>
                </BottomTitleDiv>
                <CardAddButton>
                  <BsPlusLg color='#FFFFFF' size={26} />
                </CardAddButton>
              </CardBottom>
            </Card>
            <Card>
              <img src='/images/properties/360.jpg' alt='360' />
              <Overlay />
              <CardBottom>
                <BottomTitleDiv>
                  <div>
                    <img src='/images/icon/360.png' alt='360' />
                  </div>
                  <p>BUILDING</p>
                </BottomTitleDiv>
                <CardAddButton>
                  <BsPlusLg color='#FFFFFF' size={26} />
                </CardAddButton>
              </CardBottom>
            </Card>
            <Card>
              <img src='/images/properties/360.jpg' alt='360' />
              <Overlay />
              <CardBottom>
                <BottomTitleDiv>
                  <div>
                    <img src='/images/icon/360.png' alt='360' />
                  </div>
                  <p>BUILDING</p>
                </BottomTitleDiv>
                <CardAddButton>
                  <BsPlusLg color='#FFFFFF' size={26} />
                </CardAddButton>
              </CardBottom>
            </Card>
          </Cards>
          <SelectionButtons>
            <LeftButton></LeftButton>
            <RightButton></RightButton>
          </SelectionButtons>
        </CardDiv>
      </Wrapper>
    </>
  );
};

export default Properties;
