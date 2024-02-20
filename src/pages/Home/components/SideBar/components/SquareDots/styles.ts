import styled from 'styled-components';

export const SquareDotsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;

  div {
    width: 2px;
    height: 2px;
    background: #86817d;

    &:first-child,
    &:last-child {
      height: 1px;
    }
  }
`;
