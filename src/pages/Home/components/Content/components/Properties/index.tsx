import {
  Card,
  CardDiv,
  Cards,
  LeftButton,
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
            <Card></Card>
            <Card></Card>
            <Card></Card>
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
