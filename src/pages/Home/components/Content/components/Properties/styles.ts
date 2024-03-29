import styled, { css } from 'styled-components';
import {
  fadeInToLeft,
  fadeInToRight,
  slideInFromTop,
  slideInFromRight,
} from '../../../../../../shared/animation/animations';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 840px) {
    margin-left: 60px;
  }

  @media (max-width: 420px) {
    margin-left: 30px;
  }
`;

export const TitleDiv = styled.div`
  animation: ${slideInFromTop} 0.9s ease-in-out;
  margin-left: 60px;
  margin-right: 140px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 860px;

  h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 65px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #ffffff;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
  }

  button {
    margin-top: 32px;
    border: none;
    width: 206px;
    height: 48px;
    padding: 0px, 16px, 0px, 16px;
    border-radius: 1000px;
    gap: 8px;
    box-shadow: 1px 1px 5px 1px #ffffff52 inset, 0px 4px 4px 0px #00000040;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    color: #000000;
    cursor: pointer;

    p {
      color: #000000;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.04em;
    }

    &:hover {
      background-color: #ffea94;
      color: #000000;
      transition: 0.6s;
    }
  }

  @media (max-width: 1120px) {
    margin-right: 10px;
    width: 560px;

    h1 {
      font-size: 30px;
      line-height: 30px;
    }

    p {
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

export const CardDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  overflow: hidden;
  height: 600px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1160px) {
    height: 520px;
  }
`;

export const Cards = styled.div<{
  shouldAnimateCards: boolean;
  position: 'right' | 'left' | '';
}>`
  height: 532px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  width: 100%;

  ${({ shouldAnimateCards, position }) =>
    shouldAnimateCards &&
    css`
      animation: ${!position
        ? css`
            ${slideInFromRight} 2s ease-in-out
          `
        : position === 'right'
        ? css`
            ${fadeInToLeft} 0.9s ease-in-out
          `
        : css`
            ${fadeInToRight} 0.9s ease-in-out
          `};
    `}

  @media (max-width: 1160px) {
    height: 420px;
  }
`;

export const Card = styled.div<{ isSelected?: boolean }>`
  position: relative;
  width: ${({ isSelected }) => (isSelected ? '362px' : '302px')};
  height: ${({ isSelected }) => (isSelected ? '500px' : '432px')};
  min-width: ${({ isSelected }) => (isSelected ? '362px' : '302px')};
  min-height: ${({ isSelected }) => (isSelected ? '500px' : '432px')};
  border-radius: 18.97px;
  box-shadow: 0px 4px 4px 0px #0000007a;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1160px) {
    width: ${({ isSelected }) => (isSelected ? '250px' : '208px')};
    height: ${({ isSelected }) => (isSelected ? '347px' : '300px')};
    min-width: ${({ isSelected }) => (isSelected ? '250px' : '208px')};
    min-height: ${({ isSelected }) => (isSelected ? '347px' : '300px')};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 67.63%,
    rgba(0, 0, 0, 0.56) 100%
  );
`;

export const CardBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
`;

export const BottomTitleDiv = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;

  div {
    width: 24px;
    display: flex;
    align-items: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;

export const CustomButton = styled.button<{ isDisabled?: boolean }>`
  border: none;
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 1000px;
  gap: 35px;
  background: ${({ isDisabled }) => (isDisabled ? '#0000000f' : '#ffffff14')};
  box-shadow: ${({ isDisabled }) =>
    isDisabled
      ? '1px 1px 5px 1px #ffffff21 inset, 0px 4px 4px 0px #00000040'
      : '1px 1px 5px 1px #ffffff52 inset, 0px 4px 4px 0px #00000040'};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? 'unset' : 'pointer')};

  &:hover {
    box-shadow: ${({ isDisabled }) =>
      isDisabled
        ? '1px 1px 5px 1px #ffffff21 inset, 0px 4px 4px 0px #00000040'
        : '1px 2px 5px 2px #ffffff96 inset, 0px 4px 4px 0px #00000040'};
    transition: 0.6s;
  }

  * {
    color: ${({ isDisabled }) => (isDisabled ? '#cfcfcfb3' : '#ffffff')};
  }
`;

export const SelectionButtons = styled.div`
  margin-left: 104px;
  gap: 40px;
  margin-bottom: 20px;
  margin-top: 36px;
  display: flex;

  @media (max-width: 1160px) {
    margin-left: 47px;
    margin-top: -12px;
  }
`;

export const Pagination = styled.div`
  color: white;
  position: fixed;
  bottom: 30px;
  right: 26px;
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0.5px;
    text-align: left;
  }

  div {
    height: 1px;
    width: 48px;
    border-bottom: 2px solid;
    border-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.32) 12.9%,
        rgba(255, 255, 255, 0) 106.54%
      )
      1;
  }

  :first-child {
    color: #ffffff;
  }

  :last-child {
    color: #b0b0b0;
  }
`;
