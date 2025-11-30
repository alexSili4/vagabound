import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #500800;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(100)}px;
  }
`;

export const List = styled.ul`
  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: flex;
  }
`;

export const ListItem = styled.li`
  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 25%;
  }
`;

export const Card1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  background-color: #1a3e2f;
`;

export const Card2 = styled(Card1)`
  background-color: #ad630b;
`;

export const Card3 = styled(Card1)`
  background-color: #252525;
`;

export const Card4 = styled(Card1)`
  background-color: #983400;
`;

export const Name = styled.p`
  position: absolute;
  top: 50px;
  left: 57%;
  rotate: -15deg;
  color: #ebac3d;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 104px;
  line-height: 0.3;
  letter-spacing: 2%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 72px;
    left: 57%;
  }
`;

export const CardContent = styled.div``;

export const Image = styled.img``;

export const CardInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const CardInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;

export const CardTitle = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const CardText = styled.p`
  color: rgba(232, 232, 232, 0.8);
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`;

export const Delimiter = styled.div`
  height: 1px;
  background-color: rgba(232, 232, 232, 0.48);
`;

export const CardLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background-color: #e8e8e8;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: -1%;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    max-width: 200px;
  }
`;

export const Desk = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const Accordion = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const AccordionBtn = styled.button`
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.spacing(1)}px;
  width: 100%;
  color: rgba(232, 232, 232, 0.8);
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  text-align: left;
`;

export const IconWrap = styled.span<{ isShowElement: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8e8e8;
  transform: rotateX(${({ isShowElement }) => (isShowElement ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const ContentWrap = styled.div<{
  isShowElement: boolean;
  scrollHeight: number | null;
}>`
  max-height: ${({ isShowElement, scrollHeight }) =>
    isShowElement ? scrollHeight : 0}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Content = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
`;
