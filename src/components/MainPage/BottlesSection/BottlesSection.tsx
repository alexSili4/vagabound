import { FC } from 'react';
import {
  Section,
  Card1,
  Card2,
  Card3,
  Card4,
  CardContent,
  CardInfo,
  CardInfoItem,
  CardText,
  CardTitle,
  Image,
  List,
  ListItem,
  Delimiter,
  CardLink,
  Name,
} from './BottlesSection.styled';
import bottle1 from '@/images/bottles/bottle-1.webp';
import bottle2 from '@/images/bottles/bottle-2.webp';
import bottle3 from '@/images/bottles/bottle-3.webp';
import bottle4 from '@/images/bottles/bottle-4.webp';

const BottlesSection: FC = () => {
  return (
    <Section>
      <List>
        <ListItem>
          <Card1>
            <Name>Рорі</Name>
            <CardContent>
              <Image src={bottle1} alt='' />
              <CardInfo>
                <CardInfoItem>
                  <CardTitle>вік</CardTitle>
                  <CardText>13 років</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
                  <CardText>Листопад 2011</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИП БОЧКИ</CardTitle>
                  <CardText>
                    Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask
                    (квотеркаск, в якому витримували неназване віскі з Айли,
                    потім витримували обкурене віскі Holyrood, а потім
                    витримували в ньому наше віскі)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    Аромат: Феноли Laphroaig у всій своїй красі та гармонії.
                    Смак: Потужні торф’яні ноти — саме те, чого очікуєш від
                    легендарної гуральні Айли. Посмак: Дим й льодяники від кашлю
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ</CardLink>
          </Card1>
        </ListItem>
        <ListItem>
          <Card2>
            <Name>Лохан</Name>
            <CardContent>
              <Image src={bottle2} alt='' />
              <CardInfo>
                <CardInfoItem>
                  <CardTitle>вік</CardTitle>
                  <CardText>13 років</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
                  <CardText>Листопад 2011</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИП БОЧКИ</CardTitle>
                  <CardText>
                    Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask
                    (квотеркаск, в якому витримували неназване віскі з Айли,
                    потім витримували обкурене віскі Holyrood, а потім
                    витримували в ньому наше віскі)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    Аромат: Феноли Laphroaig у всій своїй красі та гармонії.
                    Смак: Потужні торф’яні ноти — саме те, чого очікуєш від
                    легендарної гуральні Айли. Посмак: Дим й льодяники від кашлю
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ</CardLink>
          </Card2>
        </ListItem>
        <ListItem>
          <Card3>
            <Name>Кемпбел</Name>
            <CardContent>
              <Image src={bottle3} alt='' />
              <CardInfo>
                <CardInfoItem>
                  <CardTitle>вік</CardTitle>
                  <CardText>13 років</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
                  <CardText>Листопад 2011</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИП БОЧКИ</CardTitle>
                  <CardText>
                    Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask
                    (квотеркаск, в якому витримували неназване віскі з Айли,
                    потім витримували обкурене віскі Holyrood, а потім
                    витримували в ньому наше віскі)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    Аромат: Феноли Laphroaig у всій своїй красі та гармонії.
                    Смак: Потужні торф’яні ноти — саме те, чого очікуєш від
                    легендарної гуральні Айли. Посмак: Дим й льодяники від кашлю
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ</CardLink>
          </Card3>
        </ListItem>
        <ListItem>
          <Card4>
            <Name>Мейзі</Name>
            <CardContent>
              <Image src={bottle4} alt='' />
              <CardInfo>
                <CardInfoItem>
                  <CardTitle>вік</CardTitle>
                  <CardText>13 років</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
                  <CardText>Листопад 2011</CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИП БОЧКИ</CardTitle>
                  <CardText>
                    Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask
                    (квотеркаск, в якому витримували неназване віскі з Айли,
                    потім витримували обкурене віскі Holyrood, а потім
                    витримували в ньому наше віскі)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    Аромат: Феноли Laphroaig у всій своїй красі та гармонії.
                    Смак: Потужні торф’яні ноти — саме те, чого очікуєш від
                    легендарної гуральні Айли. Посмак: Дим й льодяники від кашлю
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ</CardLink>
          </Card4>
        </ListItem>
      </List>
    </Section>
  );
};

export default BottlesSection;
