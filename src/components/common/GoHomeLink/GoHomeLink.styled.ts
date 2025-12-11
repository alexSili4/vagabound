import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  width: 123px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid;
  border-color: #252525;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: -1%;
  text-align: center;
  text-transform: uppercase;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc},
    border-color ${({ theme }) => theme.transitionDurationAndFunc},
    color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: #252525;
    border-color: #252525;
    color: ${({ theme }) => theme.colors.white};
  }
`;
