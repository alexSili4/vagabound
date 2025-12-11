import { FC } from 'react';
import { Section, Container, Text, Title, CutImg } from './AboutSection.styled';
import { SectionId } from '@/constants';
import cut from '@/images/barrels/cut.webp';

const AboutSection: FC = () => {
  return (
    <Section id={SectionId.about}>
      <CutImg src={cut} alt='Декоративний обрив' />

      <Container>
        <Title>ПРО ПРОЄКТ</Title>
        <Text>
          Усі великі відкриття і найбільші дурниці стартують однаково: з питання
          “А що, якщо?”. Що, якщо бочці з віскі зіграти на волинці, почитати
          казки або змусити її дивитися артхаус? Чи здатна вона стати актором
          театру? Ми перевіряємо це просто зараз. Ніякої магії — тільки фізика з
          дрібкою драматургії. Запрошуємо до вистави. І нехай вас не бентежить,
          що наші актори — дерев’яні. Запускаємо маховик бешкету.
        </Text>
      </Container>
    </Section>
  );
};

export default AboutSection;
