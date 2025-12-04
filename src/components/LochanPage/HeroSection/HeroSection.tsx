import { FC } from 'react';
import { Section, Container, StyledVideo, Video } from './HeroSection.styled';
import GoHomeLink from '@CommonComponents/GoHomeLink';
import lochan from '@/video/lochan.mp4';
import { useVideo } from '@/hooks';

const HeroSection: FC = () => {
  const { videoRef } = useVideo();

  return (
    <Section>
      <Container>
        <Video>
          <StyledVideo ref={videoRef} src={lochan} muted playsInline loop />
        </Video>
        <GoHomeLink />
      </Container>
    </Section>
  );
};

export default HeroSection;
