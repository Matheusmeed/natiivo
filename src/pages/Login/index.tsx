import { useState } from 'react';
import StandByContent from './components/StandByContent';
import { GradientWrapper, Wrapper } from './styles';
import LoginCard from './components/LoginCard';
import CopyRight from '../../shared/components/CopyRight';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const openLogin = () => {
    setIsLogin(true);
  };

  return (
    <Wrapper>
      <video src='/videos/video_background.mp4' autoPlay muted loop></video>
      <GradientWrapper>
        {isLogin ? <LoginCard /> : <StandByContent openLogin={openLogin} />}
        <CopyRight />
      </GradientWrapper>
    </Wrapper>
  );
};

export default LoginPage;
