import styled from 'styled-components';

export const Card = styled.div`
  width: fit-content;
  height: 600px;
  padding: 48px;
  border-radius: 16px;
  gap: 48px;
  box-shadow: 0px 109.543212890625px 82.15740966796875px 0px #0000000d;
  box-shadow: 1px 1px 5px 1px #ffffff52 inset;
  background: #000000a3;
  display: flex;
  gap: 30px;
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
  width: 400px;
  height: 500px;
`;
