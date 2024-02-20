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
import { useEffect, useState } from 'react';

const Properties: React.FC<{
  changeBackground: (newBackground: string) => void;
}> = ({ changeBackground }) => {
  const [selectedContent, setSelectedContent] = useState(properties[0]);

  useEffect(() => {
    changeBackground(selectedContent.background);
  }, [changeBackground, selectedContent.background]);

  const isButtonDisabled = (direction: 'left' | 'right') => {
    if (
      (selectedContent.id === 1 && direction === 'left') ||
      (selectedContent.id === properties.length && direction === 'right')
    ) {
      return true;
    }
  };

  return (
    <>
      <Wrapper>
        <TitleDiv>
          <h1>{selectedContent.title}</h1>
          <p>{selectedContent.description}</p>
          <button>
            <p>LET ME IN</p> <HiArrowNarrowRight style={{ marginBottom: 2 }} />
          </button>
        </TitleDiv>
        <CardDiv>
          <Cards>
            {properties.map((property) => {
              if (
                property.id < selectedContent.id &&
                property.id < properties.length - 1
              )
                return <></>;
              return (
                <Card
                  isSelected={property.id === selectedContent.id}
                  key={property.id}
                >
                  <img src={property.cardBackground} alt='360' />
                  <Overlay />
                  <CardBottom>
                    <BottomTitleDiv>
                      <div>
                        <img src={property.icon} alt='360' />
                      </div>
                      <p>{property.cardTitle}</p>
                    </BottomTitleDiv>
                    <CustomButton
                      onClick={() => {
                        setSelectedContent(property);
                      }}
                    >
                      <BsPlusLg color='#FFFFFF' size={26} />
                    </CustomButton>
                  </CardBottom>
                </Card>
              );
            })}
          </Cards>
          <SelectionButtons>
            <CustomButton
              isDisabled={isButtonDisabled('left')}
              onClick={() => {
                if (!isButtonDisabled('left')) {
                  console.log('oi');
                  setSelectedContent((prevContent) => {
                    const newContent = properties.find(
                      (el) => el.id === prevContent.id - 1
                    );
                    return newContent || prevContent;
                  });
                }
              }}
            >
              <BsArrowLeft color='#FFFFFF' size={30} />
            </CustomButton>
            <CustomButton
              isDisabled={isButtonDisabled('right')}
              onClick={() => {
                if (!isButtonDisabled('right')) {
                  setSelectedContent((prevContent) => {
                    const newContent = properties.find(
                      (el) => el.id === prevContent.id + 1
                    );
                    console.log(newContent);
                    return newContent || prevContent;
                  });
                }
              }}
            >
              <BsArrowRight color='#FFFFFF' size={30} />
            </CustomButton>
          </SelectionButtons>
        </CardDiv>
        <Pagination>
          <p>{selectedContent.id}</p>
          <div></div>
          <p>{properties.length}</p>
        </Pagination>
      </Wrapper>
    </>
  );
};

export default Properties;
