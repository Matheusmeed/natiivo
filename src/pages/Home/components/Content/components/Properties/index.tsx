import { BsPlusLg } from 'react-icons/bs';
import {
  BottomTitleDiv,
  Card,
  CardBottom,
  CardDiv,
  Cards,
  CustomButton,
  Overlay,
  Pagination,
  SelectionButtons,
  TitleDiv,
  Wrapper,
} from './styles';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { properties } from '../../../../../../shared/util/properties';
import { useEffect } from 'react';

const Properties: React.FC<{
  changeBackground: (newBackground: string) => void;
}> = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(properties[0].background);
  }, [changeBackground]);

  return (
    <>
      <Wrapper>
        <TitleDiv>
          <h1>{properties[0].title}</h1>
          <p>{properties[0].description}</p>
          <button>
            <p>LET ME IN</p> <HiArrowNarrowRight style={{ marginBottom: 2 }} />
          </button>
        </TitleDiv>
        <CardDiv>
          <Cards>
            <Card isSelected>
              <img src={properties[0].cardBackground} alt='360' />
              <Overlay />
              <CardBottom>
                <BottomTitleDiv>
                  <div>
                    <img src={properties[0].icon} alt='360' />
                  </div>
                  <p>{properties[0].cardTitle}</p>
                </BottomTitleDiv>
                <CustomButton>
                  <BsPlusLg color='#FFFFFF' size={26} />
                </CustomButton>
              </CardBottom>
            </Card>
            <Card>
              <img src={properties[0].cardBackground} alt='360' />
              <Overlay />
              <CardBottom>
                <BottomTitleDiv>
                  <div>
                    <img src={properties[0].icon} alt='360' />
                  </div>
                  <p>{properties[0].cardTitle}</p>
                </BottomTitleDiv>
                <CustomButton>
                  <BsPlusLg color='#FFFFFF' size={26} />
                </CustomButton>
              </CardBottom>
            </Card>
          </Cards>
          <SelectionButtons>
            <CustomButton>
              <BsArrowLeft color='#FFFFFF' size={30} />
            </CustomButton>
            <CustomButton>
              <BsArrowRight color='#FFFFFF' size={30} />
            </CustomButton>
          </SelectionButtons>
        </CardDiv>
        <Pagination>
          <p>1</p>
          <div></div>
          <p>2</p>
        </Pagination>
      </Wrapper>
    </>
  );
};

export default Properties;
