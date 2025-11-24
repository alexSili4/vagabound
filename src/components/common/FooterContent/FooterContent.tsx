import { FC } from 'react';
import {
  Vagabound,
  Anchor,
  Copy,
  DSLogo,
  Delimiter,
  Desc,
  FBLogo,
  InstagramLogo,
  ListItem,
  LogoList,
  NavLinks,
  SilpoLogo,
  Text,
  TextWrap,
  Warning,
  Container,
} from './FooterContent.styled';
import vagabound from '@/images/footer/vagabound.webp';

const FooterContent: FC = () => {
  return (
    <Container>
      <Vagabound src={vagabound} alt='' />
      <NavLinks>
        <ListItem>
          <Anchor href='/'>Про проєкт</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href='/'>Історія</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href='/'>Ми в соцмережах</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href='/'>Замовити</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href='/'>Часті питання</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href='/'>Відгуки експертів</Anchor>
        </ListItem>
      </NavLinks>
      <LogoList>
        <ListItem>
          <DSLogo />
        </ListItem>
        <ListItem>
          <SilpoLogo />
        </ListItem>
        <ListItem>
          <InstagramLogo />
        </ListItem>
        <ListItem>
          <FBLogo />
        </ListItem>
      </LogoList>
      <Desc>
        Сайт може містити контент, не призначений для осіб молодше 18 років.
      </Desc>
      <TextWrap>
        <Text>Designed by Julia Dudarenko</Text>
        <Delimiter />
        <Text>Powered by Sun Agency</Text>
      </TextWrap>
      <Copy>Copy @ 2025</Copy>
      <Warning>
        надмірне споживання алкоголю шкідливе для вашого здоров'я
      </Warning>
    </Container>
  );
};

export default FooterContent;
