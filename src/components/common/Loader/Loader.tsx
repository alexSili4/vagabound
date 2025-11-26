import { FC } from 'react';
import { Container, Logo, LogoWrap, Content, Progress } from './Loader.styled';

const images = [
  '/logo-1.webp',
  '/logo-2.webp',
  '/logo-3.webp',
  '/logo-4.webp',
  '/logo-5.webp',
  '/logo-6.webp',
];

const Loader: FC = () => {
  return (
    <Container>
      <Content>
        <LogoWrap>
          {images.map((src, index) => (
            <Logo key={src} src={src} alt='' $index={index} />
          ))}
        </LogoWrap>
        <Progress></Progress>
      </Content>
    </Container>
  );
};

export default Loader;
