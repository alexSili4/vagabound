import { FC } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { StyledLink } from './GoHomeLink.styled';

const GoHomeLink: FC = () => {
  return (
    <StyledLink to='/'>
      <FiArrowLeft />
      <span>назад</span>
    </StyledLink>
  );
};

export default GoHomeLink;
