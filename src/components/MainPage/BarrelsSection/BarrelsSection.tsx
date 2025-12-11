import { FC, useEffect, useRef, useState } from 'react';
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
import { PagePaths, SectionId } from '@/constants';
import labelBg from '@/images/barrels/label-bg.webp';
import { useCounterAnimation } from '@/hooks';

const Label: FC<{ totalCount: number; currentCount: number }> = ({
  totalCount,
  currentCount,
}) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const count = useCounterAnimation(currentCount, isInView, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.8 }
    );

    if (labelRef.current) {
      observer.observe(labelRef.current);
    }

    return () => {
      if (labelRef.current) {
        observer.unobserve(labelRef.current);
      }
    };
  }, []);

  return (
    <LabelContainer ref={labelRef}>
      <LabelBg src={labelBg} alt='Купон' />

      <LabelTextWrap>
        <LabelTitle>залишок партії</LabelTitle>
        <LabelNumber>
          <span>{count}</span>
          <TotalNumber>/{totalCount}</TotalNumber>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const leftLightRef = useRef<HTMLDivElement>(null);
  const rightLightRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Встановлюємо завершення анімації через 1.2 секунди (тривалість transition)
          setTimeout(() => {
            setAnimationComplete(true);
          }, 1200);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!animationComplete) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!leftLightRef.current || !rightLightRef.current) return;

      // Отримуємо позиції прожекторів
      const leftLightRect = leftLightRef.current.getBoundingClientRect();
      const rightLightRect = rightLightRef.current.getBoundingClientRect();

      // Для лівого прожектора - слідкуємо лівою середньою точкою
      const leftTrackingPoint = {
        x: leftLightRect.left,
        y: leftLightRect.top + leftLightRect.height / 2,
      };

      // Для правого прожектора - слідкуємо правою середньою точкою
      const rightTrackingPoint = {
        x: rightLightRect.right,
        y: rightLightRect.top + rightLightRect.height / 2,
      };

      // Розраховуємо кути для кожного прожектора
      const leftAngle =
        Math.atan2(
          e.clientY - leftTrackingPoint.y,
          e.clientX - leftTrackingPoint.x
        ) *
        (180 / Math.PI);

      // Для правого прожектора інвертуємо кут (дзеркальне відображення)
      const rightAngle =
        Math.atan2(
          e.clientY - rightTrackingPoint.y,
          rightTrackingPoint.x - e.clientX
        ) *
        (180 / Math.PI);

      // Обмежуємо кути (від -30 до 30 градусів для більш реалістичного ефекту)
      const clampedLeftAngle = Math.max(-30, Math.min(30, leftAngle));
      const clampedRightAngle = Math.max(-30, Math.min(30, -rightAngle));

      // Застосовуємо трансформації
      leftLightRef.current.style.transform = `rotate(${clampedLeftAngle}deg)`;
      rightLightRef.current.style.transform = `rotate(${clampedRightAngle}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [animationComplete]);

  return (
    <Section id={SectionId.barrels}>
      <Title>Бочки</Title>
      <Container ref={containerRef}>
        <BarrelLinkLeft to={PagePaths.maisie}>
          <BarrelCardLeft>
            <BarrelImgLeftWrap>
              <BarrelLeftImg src={barrelLeft} alt='МЕЙЗІ' />
              <Label totalCount={99} currentCount={85} />
            </BarrelImgLeftWrap>
            <BarrelTextWrap>
              <BarrelTitle>Мейзі Еддертон</BarrelTitle>
              <BarrelText>
                Поціновувачка вишуканого вінтажу, якщо хильнути зайвого в неї в
                гостях, — в інтер'єрі Мейзі дуже легко забути, який зараз рік.
              </BarrelText>
            </BarrelTextWrap>
          </BarrelCardLeft>
        </BarrelLinkLeft>

        <BarrelLinkBottom to={PagePaths.rory}>
          <BarrelImgBottomWrap>
            <BarrelBottomImg src={barrelBottom} alt='МЕЙЗІ' />
            <Label totalCount={95} currentCount={93} />
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
            <Label totalCount={30} currentCount={25} />
          </BarrelImgTopWrap>
          <BarrelTopTextWrap>
            <BarrelTitle>Лохан Чепелтон</BarrelTitle>
            <BarrelText>
              Мріє стати великим актором. Проте колеги делікатно мовчать про те,
              що на сцені він трішки… дерев'яний.
            </BarrelText>
          </BarrelTopTextWrap>
        </BarrelLinkTop>

        <BarrelLinkRight to={PagePaths.campbell}>
          <BarrelImgRightWrap>
            <BarrelRightImg src={barrelRight} alt='МЕЙЗІ' />
            <Label totalCount={80} currentCount={71} />
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

        <LightLeftWrap
          ref={leftLightRef}
          className={`${isInView ? 'in-view' : ''} ${
            animationComplete ? 'tracking' : ''
          }`}
        >
          <LightLeft src={lightLeft} alt='Прожектор' />
        </LightLeftWrap>
        <LightRightWrap
          ref={rightLightRef}
          className={`${isInView ? 'in-view' : ''} ${
            animationComplete ? 'tracking' : ''
          }`}
        >
          <LightRight src={lightRight} alt='Прожектор' />
        </LightRightWrap>
      </Container>
    </Section>
  );
};

export default BarrelsSection;
