import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background: none;
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
      box-shadow: 1px 1px 5px 1px #ffffff52 inset;
      backdrop-filter: blur(5px);
      transition: 0.3s;
    }
  }
`;
