import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InteractiveButton = styled.button<{ isInitialPage: boolean }>`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 89.6px;
  transform: translate(-50%, -50%);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  width: 40px;
  height: 40px;
  background: #ffffff14;
  box-shadow: 1px 1px 5px 1px #ffffff52 inset, 0px 4px 4px 0px #00000040;
  backdrop-filter: blur(5px);
  cursor: pointer;

  &:hover {
    box-shadow: 1px 2px 5px 2px #ffffff96 inset, 0px 4px 4px 0px #00000040;
    transition: 0.6s;
  }

  @media (max-width: 480px) {
    left: 78.3px;
  }
  @media (max-width: 420px) {
    left: ${({ isInitialPage }) => (isInitialPage ? '78.3px' : '39.7px')};
  }
`;

export const HeaderDiv = styled.div`
  margin: 20px 30px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const NavigationDiv = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  gap: 18px;

  border-bottom: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.32) 63.62%,
      rgba(255, 255, 255, 0) 106.54%
    )
    1;
`;

export const NavigationOption = styled.button<{ isSelected?: boolean }>`
  width: fit-content;
  border: none;
  padding: 0;
  background: none;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  text-align: left;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : '400')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#dbdbdcc4')};
  border-bottom: ${({ isSelected }) =>
    isSelected ? '1px solid white' : 'none'};
  margin-bottom: -0.84px;

  &:hover {
    color: white;
    font-weight: bold;
    transition: 0.6s;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 40px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const BodyDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
