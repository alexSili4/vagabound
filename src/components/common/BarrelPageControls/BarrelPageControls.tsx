import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Container, Arrow, StyledLink } from './BarrelPageControls.styled';

const BarrelPageControls: FC = () => {
  return (
    <Container>
      <StyledLink to={PagePaths.root}>на головну</StyledLink>
      <StyledLink to={PagePaths.root}>
        <span>наступна бочка</span>
        <Arrow />
      </StyledLink>
    </Container>
  );
};

export default BarrelPageControls;
