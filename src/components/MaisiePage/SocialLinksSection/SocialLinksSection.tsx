import { FC } from 'react';
import {
  Section,
  Container,
  Content,
  Link,
  List,
  ListItem,
  SectionTitle,
  Title,
  Cut,
} from './SocialLinksSection.styled';
import cut from '@/images/barrel-page/maisie/cut.webp';

const SocialLinksSection: FC = () => {
  return (
    <Section>
      <Cut src={cut} alt='' />
      <SectionTitle>Ми у соціальних мережах</SectionTitle>
      <Container>
        <Content>
          <Title>Follow me here:</Title>
          <List>
            <ListItem>
              <Link
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
              ></Link>
            </ListItem>
            <ListItem>
              <Link
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
              ></Link>
            </ListItem>
            <ListItem>
              <Link
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
              ></Link>
            </ListItem>
            <ListItem>
              <Link
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
              ></Link>
            </ListItem>
          </List>
        </Content>
      </Container>
    </Section>
  );
};

export default SocialLinksSection;
