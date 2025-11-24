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
} from './BagSection.styled';
import label from '@/images/bag/label.png';
import arrow from '@/images/bag/arrow.png';
import closedBag from '@/images/bag/closed-bag.png';
import openBag from '@/images/bag/open-bag.png';
import ticket from '@/images/bag/ticket.png';
import photo from '@/images/bag/photo.png';

const BagSection: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <Photo src={photo} alt='' />
            <Ticket src={ticket} alt='' />
            <Letter></Letter>
          </Open>
        </BagBtn>
      </Container>
    </Section>
  );
};

export default BagSection;
