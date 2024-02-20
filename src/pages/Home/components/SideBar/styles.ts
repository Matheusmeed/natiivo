import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid;
  border-image: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 12.9%,
      rgba(255, 255, 255, 0.32) 37.77%,
      rgba(255, 255, 255, 0) 106.54%
    )
    1;
  background-clip: padding-box;
`;

export const SelectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectionButton = styled.button<{ isSelected: boolean }>`
  backdrop-filter: ${({ isSelected }) => (isSelected ? 'blur(5px)' : 'unset')};
  background: ${({ isSelected }) => (isSelected ? '#ffffff0f' : 'none')};
  box-shadow: ${({ isSelected }) =>
    isSelected
      ? '1px 1px 5px 1px #ffffff52 inset, 0px 4px 4px 0px #00000040'
      : 'none'};
  border: none;
  cursor: pointer;
  border-radius: 30px;
  width: 27px;
  height: 27px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 17px;
  }

  &:hover {
    background: #ffffff0f;
    box-shadow: 1px 1px 5px 1px #ffffff52 inset, 0px 4px 4px 0px #00000040;
    backdrop-filter: blur(5px);
    transition: 0.6s;
  }
`;

export const BottomOptions = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #9c9c9c;

    p {
      display: none;
      position: absolute;
      left: 32px;
      font-weight: bold;
      font-size: 0.9em;
    }

    &:hover {
      * {
        color: white;
        transition: 0.6s;
      }

      p {
        display: flex;
      }
    }
  }
`;
