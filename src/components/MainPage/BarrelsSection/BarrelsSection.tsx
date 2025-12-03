import { FC } from 'react';
import barrelLeft from '@/images/barrels/barrel-left.webp';
import barrelRight from '@/images/barrels/barrel-right.webp';
import barrelBottom from '@/images/barrels/barrel-bottom.webp';
import barrelTop from '@/images/barrels/barrel-top.webp';
import lightLeft from '@/images/barrels/light-left.webp';
import lightRight from '@/images/barrels/light-right.webp';
import {
  Section,
  BarrelCardLeft,
  BarrelImgLeftWrap,
  BarrelLeftImg,
  BarrelText,
  BarrelTextWrap,
  BarrelTitle,
  Container,
  LightLeft,
  LightLeftWrap,
  LightRight,
  LightRightWrap,
  BarrelBottomImg,
  BarrelRightImg,
  BarrelTopImg,
  BarrelImgRightWrap,
  BarrelImgBottomWrap,
  Title,
  BarrelImgTopWrap,
  BarrelLinkTop,
  BarrelLinkRight,
  BarrelTopTextWrap,
  CutImg,
  BarrelLinkLeft,
  LabelBg,
  LabelContainer,
  LabelDesc,
  LabelNumber,
  LabelTextWrap,
  LabelTitle,
  TotalNumber,
  Delimiter,
  DelimiterWrap,
  BarrelLinkBottom,
} from './BarrelsSection.styled';
import cut from '@/images/barrels/cut.webp';
import { PagePaths } from '@/constants';
import labelBg from '@/images/barrels/label-bg.webp';

const Label: FC = () => {
  return (
    <LabelContainer>
      <LabelBg src={labelBg} alt='' />

      <LabelTextWrap>
        <LabelTitle>залишок партії</LabelTitle>
        <LabelNumber>
          <span>34</span>
          <TotalNumber>/76</TotalNumber>
        </LabelNumber>
        <LabelDesc>пляшок</LabelDesc>
      </LabelTextWrap>

      <DelimiterWrap>
        <Delimiter></Delimiter>
        <Delimiter></Delimiter>
      </DelimiterWrap>
    </LabelContainer>
  );
};

const BarrelsSection: FC = () => {
  return (
    <Section>
      <CutImg src={cut} alt='Декоративний обрив' />
      <Title>Бочки</Title>
      <Container>
        <BarrelLinkLeft to={PagePaths.maisie}>
          <BarrelCardLeft>
            <BarrelImgLeftWrap>
              <BarrelLeftImg src={barrelLeft} alt='МЕЙЗІ' />
              <Label />
            </BarrelImgLeftWrap>
            <BarrelTextWrap>
              <BarrelTitle>Мейзі Еддертон</BarrelTitle>
              <BarrelText>
                Поціновувачка вишуканого вінтажу, якщо хильнути зайвого в неї в
                гостях, — в інтер’єрі Мейзі дуже легко забути, який зараз рік.
              </BarrelText>
            </BarrelTextWrap>
          </BarrelCardLeft>
        </BarrelLinkLeft>

        <BarrelLinkBottom to={PagePaths.rory}>
          <BarrelImgBottomWrap>
            <BarrelBottomImg src={barrelBottom} alt='МЕЙЗІ' />
            <Label />
          </BarrelImgBottomWrap>
          <BarrelTextWrap>
            <BarrelTitle>Рорі Нок</BarrelTitle>
            <BarrelText>
              Провідник Шотландської залізниці. Для нього життя — це рух. Якби
              його воля, він би навіть спав на біговій доріжці.
            </BarrelText>
          </BarrelTextWrap>
        </BarrelLinkBottom>

        <BarrelLinkTop to={PagePaths.lochan}>
          <BarrelImgTopWrap>
            <BarrelTopImg src={barrelTop} alt='МЕЙЗІ' />
            <Label />
          </BarrelImgTopWrap>
          <BarrelTopTextWrap>
            <BarrelTitle>Лохан Чепелтон</BarrelTitle>
            <BarrelText>
              Мріє стати великим актором. Проте колеги делікатно мовчать про те,
              що на сцені він трішки… дерев’яний.
            </BarrelText>
          </BarrelTopTextWrap>
        </BarrelLinkTop>

        <BarrelLinkRight to={PagePaths.campbell}>
          <BarrelImgRightWrap>
            <BarrelRightImg src={barrelRight} alt='МЕЙЗІ' />
            <Label />
          </BarrelImgRightWrap>
          <BarrelTextWrap>
            <BarrelTitle>Містер Кемпбел</BarrelTitle>
            <BarrelText>
              Священик за покликанням, він може витримати все: міцне віскі,
              токсичних родичів, відсутність Wi-Fi, — але тільки не зневіру
              ближнього.
            </BarrelText>
          </BarrelTextWrap>
        </BarrelLinkRight>

        <LightLeftWrap>
          <LightLeft src={lightLeft} alt='Прожектор' />
        </LightLeftWrap>
        <LightRightWrap>
          <LightRight src={lightRight} alt='Прожектор' />
        </LightRightWrap>
      </Container>
    </Section>
  );
};

export default BarrelsSection;
