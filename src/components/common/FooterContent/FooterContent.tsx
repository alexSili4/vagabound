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
import { SectionId } from '@/constants';

const FooterContent: FC = () => {
  return (
    <Container>
      <Vagabound src={vagabound} alt='Логотип' />
      <NavLinks>
        <ListItem>
          <Anchor href={`#${SectionId.about}`}>Про проєкт</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href={`#${SectionId.history}`}>Історія</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href={`#${SectionId.social}`}>Ми в соцмережах</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href={`#${SectionId.contacts}`}>Замовити</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href={`#${SectionId.faq}`}>Часті питання</Anchor>
        </ListItem>
        {/* <ListItem>
          <Anchor href='/'>Відгуки експертів</Anchor>
        </ListItem> */}
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
