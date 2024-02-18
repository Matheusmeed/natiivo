import styled from 'styled-components';

export const Card = styled.div`
  width: fit-content;
  height: 600px;
  padding: 48px;
  border-radius: 16px;
  gap: 48px;
  box-shadow: 1px 1px 5px 1px #ffffff52 inset;
  background: #000000a3;
  display: flex;
  gap: 30px;
  backdrop-filter: blur(5px);
`;

export const LeftSide = styled.div`
  width: 400px;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000052;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180.1deg,
    rgba(0, 0, 0, 0) 62.88%,
    rgba(0, 0, 0, 0.64) 90.08%
  );
`;

export const LogoDiv = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 219.84px;
  }
`;

export const RightSide = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 48px;
`;

export const TitleDiv = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    opacity: 0.7;
  }
`;

export const GuestDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-bottom: 26px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.32) 12.9%,
      rgba(255, 255, 255, 0) 106.54%
    )
    1;

  h3 {
    width: fit-content;
    padding-bottom: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    color: #f6f6f6;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.32) 12.9%,
        rgba(255, 255, 255, 0) 106.54%
      )
      1;
  }

  button {
    width: 117px;
    height: 48px;
    padding: 0px, 16px, 0px, 16px;
    border-radius: 1000px;
    gap: 8px;
    background: #ffffff14;
    border: none;
    box-shadow: 0px 4px 4px 0px #00000040;
    box-shadow: 1px 1px 5px 1px #ffffff52 inset;
    color: #f6f6f6;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-align: center;
  }
`;

export const BrokerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    width: fit-content;
    padding-bottom: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    color: #f6f6f6;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.32) 12.9%,
        rgba(255, 255, 255, 0) 106.54%
      )
      1;
  }

  input {
    padding: 16px;
    border-radius: 600px;
    background: #ffffff0f;
    border: none;
    box-shadow: 1px 1px 5px 1px #ffffff52 inset;
    outline: none;
    color: #f6f6f6;

    &::placeholder {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #f6f6f6a6;
    }
  }
`;

export const PasswordDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  button {
    position: absolute;
    right: 14px;
    transform: translateY(50%);
    background: none;
    border: none;
    cursor: pointer;
  }
`;
