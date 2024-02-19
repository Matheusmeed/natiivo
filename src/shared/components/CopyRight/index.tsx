import { CopyRightText } from './styles';

const CopyRight = ({ isAtRight }: { isAtRight?: boolean }) => {
  return (
    <CopyRightText isAtRight={isAtRight}>
      © 2023 Natiivo Miami. All rights reserved.
    </CopyRightText>
  );
};

export default CopyRight;
