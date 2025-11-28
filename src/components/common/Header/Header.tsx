import { FC, useEffect, useState, useRef } from 'react';
import {
  StyledHeader,
  Container,
  DSLogo,
  OrderLink,
  Anchor,
  Nav,
  NavWrap,
  VagaboungLogo,
  OrderLinkBg,
  OrderLinkTitle,
  OrderLinkActiveBg,
  Controls,
  MenuBtn,
  Backdrop,
  MobMenuLinks,
  ListItem,
  MobAnchor,
} from './Header.styled';
import { Link, useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';
import { BsThreeDots } from 'react-icons/bs';
import { AnimatePresence, Transition, Variants } from 'framer-motion';

interface INavigationProps {
  isDark: boolean;
}

interface IMobileMenuProps {
  isOpen: boolean;
}

interface IOrderLinkComponentProps {
  isMobMenu?: boolean;
}

const Navigation: FC<INavigationProps> = ({ isDark }) => {
  return (
    <Nav>
      <NavWrap>
        <Anchor href='/' $isDark={isDark}>
          БОЧКИ
        </Anchor>
        <Anchor href='/' $isDark={isDark}>
          СОЦМЕРЕЖІ
        </Anchor>
      </NavWrap>
      <Link to={PagePaths.root}>
        <VagaboungLogo isDark={isDark} />
      </Link>
      <NavWrap>
        <Anchor href='/' $isDark={isDark}>
          КОНТАКТИ
        </Anchor>
        <Anchor href='/' $isDark={isDark}>
          Часті питання
        </Anchor>
      </NavWrap>
    </Nav>
  );
};

export const OrderLinkComponent: FC<IOrderLinkComponentProps> = ({
  isMobMenu = false,
}) => {
  return (
    <OrderLink href='/' isMobMenu={isMobMenu}>
      <OrderLinkBg></OrderLinkBg>
      <OrderLinkActiveBg></OrderLinkActiveBg>
      <OrderLinkTitle>ЗАМОВИТИ</OrderLinkTitle>
    </OrderLink>
  );
};

const MobileMenu: FC<IMobileMenuProps> = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const transition: Transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const containerVariants: Variants = {
    initial: {
      y: 300,
      opacity: 0,
      transition,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      y: 300,
      opacity: 0,
      transition,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop
          variants={containerVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <MobMenuLinks>
            <ListItem>
              <MobAnchor></MobAnchor>
            </ListItem>
            <ListItem>
              <MobAnchor></MobAnchor>
            </ListItem>
            <ListItem>
              <MobAnchor></MobAnchor>
            </ListItem>
            <ListItem>
              <MobAnchor></MobAnchor>
            </ListItem>
            <ListItem>
              <MobAnchor></MobAnchor>
            </ListItem>
          </MobMenuLinks>
          <OrderLinkComponent isMobMenu />
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

const MobileMenuContainer: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <MobileMenu isOpen={isOpen} />

      <MenuBtn type='button' onClick={toggleIsOpen}>
        <BsThreeDots size={40} />
      </MenuBtn>
    </>
  );
};

const Header: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsDark(false);
  }, [pathname]);

  useEffect(() => {
    const checkBackgroundColor = () => {
      if (!headerRef.current) return;

      const { left, top, width, height } =
        headerRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;

      const elements = document.elementsFromPoint(x, y);

      // Find the first element that is not the header itself and has a background color
      let foundColor = null;

      for (const el of elements) {
        if (headerRef.current.contains(el)) continue;

        // First, check for explicit theme override on element or ancestors
        const themeEl = el.closest('[data-header-theme]');
        if (themeEl) {
          const theme = themeEl.getAttribute('data-header-theme');
          if (theme === 'light') {
            foundColor = 'light';
            break;
          }
          if (theme === 'dark') {
            foundColor = 'dark';
            break;
          }
        }

        // If no theme found, check background color
        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;

        if (
          bgColor &&
          bgColor !== 'rgba(0, 0, 0, 0)' &&
          bgColor !== 'transparent'
        ) {
          const match = bgColor.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/
          );
          if (match) {
            const a = match[4] ? parseFloat(match[4]) : 1;
            if (a >= 0.05) {
              foundColor = bgColor;
              break;
            }
          }
        }
      }

      if (foundColor) {
        if (foundColor === 'light') {
          setIsDark(false);
        } else if (foundColor === 'dark') {
          setIsDark(true);
        } else {
          const match = foundColor.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/
          );
          if (match) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);

            // Calculate brightness
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setIsDark(brightness < 128);
          } else {
            setIsDark(false);
          }
        }
      } else {
        setIsDark(false);
      }
    };

    const handleScroll = () => {
      checkBackgroundColor();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader ref={headerRef}>
      <Container>
        <DSLogo isDark={isDark} />
        <Navigation isDark={isDark} />
        <Controls>
          <OrderLinkComponent />
          <MobileMenuContainer />
        </Controls>
      </Container>
    </StyledHeader>
  );
};

export default Header;
