import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #983400;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(15)}px;
`;

export const SectionTitle = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const Title = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 2%;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 1px solid #e8e8e8;
  border-radius: 50%;
`;

export const Cut = styled.img`
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
`;
