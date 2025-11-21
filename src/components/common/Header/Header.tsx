import { FC } from 'react';
import {
  StyledHeader,
  Container,
  DSLogo,
  OrderLink,
  Anchor,
  Nav,
  NavWrap,
  VagaboungLogo,
} from './Header.styled';

const Navigation: FC = () => {
  return (
    <Nav>
      <NavWrap>
        <Anchor href='/'>БОЧКИ</Anchor>
        <Anchor href='/'>СОЦМЕРЕЖІ</Anchor>
      </NavWrap>
      <VagaboungLogo />
      <NavWrap>
        <Anchor href='/'>КОНТАКТИ</Anchor>
        <Anchor href='/'>Часті питання</Anchor>
      </NavWrap>
    </Nav>
  );
};

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <DSLogo />
        <Navigation />
        <OrderLink href='/'>ЗАМОВИТИ</OrderLink>
      </Container>
    </StyledHeader>
  );
};

export default Header;
