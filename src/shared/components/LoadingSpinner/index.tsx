import React from 'react';
import { ClipLoader } from 'react-spinners';
import { SpinnerWrapper } from './styles';

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader color='#9effec' loading size={40} />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
