import { useState } from 'react';
import {
  BrokerDiv,
  Card,
  GradientOverlay,
  GuestDiv,
  Image,
  LeftSide,
  LoginDiv,
  LogoDiv,
  NoAccountDiv,
  PasswordDiv,
  RightSide,
  SubmitLoginDiv,
  TitleDiv,
} from './styles';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6';
import { HiArrowNarrowRight } from 'react-icons/hi';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Card>
      <LeftSide>
        <Image src='/images/util/loginImage.jpg' alt='Login' />
        <GradientOverlay />
        <LogoDiv>
          <img src='/images/logo/natiivoLogo.png' alt='natiivoLogo' />
        </LogoDiv>
      </LeftSide>
      <RightSide>
        <TitleDiv>
          <h2>ACCESS THE PLATFORM</h2>
          <p>
            Access as a spectator by clicking let me in or log in as a broker.
          </p>
        </TitleDiv>
        <GuestDiv>
          <h3>JOIN AS GUEST</h3>
          <button>LET ME IN</button>
        </GuestDiv>
        <BrokerDiv>
          <h3>I’M A BROKER</h3>
          <input type='text' name='password' placeholder='Type your email' />
          <PasswordDiv>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Type your password'
            />
            <button onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FaRegEyeSlash color='#F6F6F6' size={20} />
              ) : (
                <FaRegEye color='#F6F6F6' size={19} />
              )}
            </button>
          </PasswordDiv>
          <LoginDiv>
            <SubmitLoginDiv>
              <button>
                LOGIN <HiArrowNarrowRight color='#000000' />
              </button>
            </SubmitLoginDiv>
            <NoAccountDiv>
              <p>Don’t have an account?</p>
              <p>Create new account</p>
            </NoAccountDiv>
          </LoginDiv>
        </BrokerDiv>
      </RightSide>
    </Card>
  );
};

export default LoginCard;
