import { FC, MouseEvent, useState, useEffect } from 'react';
import {
  Section,
  Arrow,
  Closed,
  ClosedBag,
  Container,
  Label,
  Text,
  BagBtn,
  Open,
  Letter,
  OpenBag,
  VideoWrap,
  Ticket,
  LetterDesc,
  LetterText,
  LetterTitle,
  StyledVideo,
  VideoBg,
} from './BagSection.styled';
import label from '@/images/bag/label.webp';
import arrow from '@/images/bag/arrow.webp';
import closedBag from '@/images/bag/closed-bag.webp';
import openBag from '@/images/bag/open-bag.webp';
import ticket from '@/images/bag/ticket.webp';
import { useVideo } from '@/hooks';
import bag from '@/video/bag.mp4';
import videoBg from '@/images/order/video-bg.webp';

const BagSection: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { videoRef } = useVideo();

  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    setIsOpen(true);
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isOpen) {
      video.play().catch((e) => console.log('Autoplay blocked', e));
    } else {
      video.pause();
    }
  }, [isOpen, videoRef]);

  return (
    <Section>
      <Container>
        <BagBtn type='button' onClick={onBtnClick}>
          <Closed isOpen={isOpen}>
            <Label src={label} alt='Етикетка' isOpen={isOpen} />
            <ClosedBag src={closedBag} alt='Валіза' />
            <Arrow src={arrow} alt='Стрілка' />
            <Text>Відкрий мене</Text>
          </Closed>

          <Open isOpen={isOpen}>
            <OpenBag src={openBag} alt='Валіза' />
            <VideoWrap isOpen={isOpen}>
              <VideoBg src={videoBg} alt='Задній фон' />
              <StyledVideo ref={videoRef} src={bag} muted playsInline loop />
            </VideoWrap>
            <Ticket src={ticket} alt='Купон' isOpen={isOpen} />
            <Letter isOpen={isOpen}>
              <LetterTitle>
                О, як добре, що ви таки сюди навідалися!
              </LetterTitle>
              <LetterText>
                Дайте-но вгадаю: ви любите віскі й прийшли сюди в пошуках віскі?
                Це пречудово, бо нам є, що вам запропонувати. Як ви знаєте, в
                кожного віскі є своя історія. Наші розповідають її самі. Так, це
                трохи незвично, але тільки поки ви з ними не познайомитесь.
                Знайомство відбувається через келих: рукостискання з Рорі, флірт
                з Мейзі, бесіда з містером Кемпбеллом, обмін люб'язностями з
                Лоханом. Всі ці видатні напої потребують слухача та
                співрозмовника — вас! І мені дуже хочеться, щоб ви зійшлися
                характерами.
              </LetterText>
              <LetterDesc>
                З найглибшою повагою до вашого смаку,
                <br />
                Тімур
              </LetterDesc>
            </Letter>
          </Open>
        </BagBtn>
      </Container>
    </Section>
  );
};

export default BagSection;
