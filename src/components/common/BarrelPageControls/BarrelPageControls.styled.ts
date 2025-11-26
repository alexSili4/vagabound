import styled from '@emotion/styled';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  height: 44px;
  padding-left: ${({ theme }) => theme.spacing(5)}px;
  padding-right: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 8px;
  border: 1px solid #f6c6e4;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: -1%;
  text-transform: uppercase;
`;

export const Arrow = styled(FiArrowRight)`
  width: 24px;
  height: 24px;
`;
