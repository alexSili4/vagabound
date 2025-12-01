import { FC, MouseEvent, useState } from 'react';
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
  Photo,
  Ticket,
  LetterDesc,
  LetterText,
  LetterTitle,
} from './BagSection.styled';
import label from '@/images/bag/label.webp';
import arrow from '@/images/bag/arrow.webp';
import closedBag from '@/images/bag/closed-bag.webp';
import openBag from '@/images/bag/open-bag.webp';
import ticket from '@/images/bag/ticket.webp';
import photo from '@/images/bag/photo.webp';

const BagSection: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    setIsOpen(true);
  };

  return (
    <Section>
      <Container>
        <BagBtn type='button' onClick={onBtnClick}>
          <Closed isOpen={isOpen}>
            <Label src={label} alt='' isOpen={isOpen} />
            <ClosedBag src={closedBag} alt='' />
            <Arrow src={arrow} alt='' />
            <Text>Відкрий мене</Text>
          </Closed>

          <Open isOpen={isOpen}>
            <OpenBag src={openBag} alt='' />
            <Photo src={photo} alt='' isOpen={isOpen} />
            <Ticket src={ticket} alt='' isOpen={isOpen} />
            <Letter isOpen={isOpen}>
              <LetterTitle>Lorem ipsum dolor sit amet,</LetterTitle>
              <LetterText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </LetterText>
              <LetterDesc>з любовю,Тимурчик</LetterDesc>
            </Letter>
          </Open>
        </BagBtn>
      </Container>
    </Section>
  );
};

export default BagSection;
