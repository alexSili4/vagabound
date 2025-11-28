import { FC } from 'react';
import {
  Logo,
  Section,
  Container,
  Photo,
  SectionTitle,
  Text,
  Title,
  TitleWrap,
} from './OrderSection.styled';
import logo from '@/images/barrel-page/maisie/logo.webp';
import photo from '@/images/barrel-page/maisie/photo.webp';

const OrderSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Замовлення</SectionTitle>
      <Container>
        <TitleWrap>
          <Logo src={logo} alt='' />
          <Photo src={photo} alt='' />
          <Title>Заголовок</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </Text>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default OrderSection;
