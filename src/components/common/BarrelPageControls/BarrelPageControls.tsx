import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Container, Arrow, StyledLink } from './BarrelPageControls.styled';

const BarrelPageControls: FC<{ href: string }> = ({ href }) => {
  return (
    <Container>
      <StyledLink to={PagePaths.root}>на головну</StyledLink>
      <StyledLink to={href}>
        <span>наступна бочка</span>
        <Arrow />
      </StyledLink>
    </Container>
  );
};

export default BarrelPageControls;
