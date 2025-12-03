import { FC } from 'react';
import { StyledFooter } from './Footer.styled';
import FooterContent from '@CommonComponents/FooterContent';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <FooterContent />
    </StyledFooter>
  );
};

export default Footer;
