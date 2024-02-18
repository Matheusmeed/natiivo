import {
  Card,
  GradientOverlay,
  Image,
  LeftSide,
  LogoDiv,
  RightSide,
} from './styles';

const LoginCard = () => {
  return (
    <Card>
      <LeftSide>
        <Image src='/images/util/loginImage.jpg' alt='Login' />
        <GradientOverlay />
        <LogoDiv>
          <img src='/images/logo/natiivoLogo.png' alt='natiivoLogo' />
        </LogoDiv>
      </LeftSide>
      <RightSide></RightSide>
    </Card>
  );
};

export default LoginCard;
