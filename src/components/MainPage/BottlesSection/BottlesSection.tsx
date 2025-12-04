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
  Accent,
  CardName,
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
              <Image src={bottle1} alt='Пляшка' />
              <CardInfo>
                <CardName>KNOCKDHU</CardName>
                <CardInfoItem>
                  <CardTitle>вік</CardTitle>
                  <CardText>18 років</CardText>
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
                    Knockdhu — Amontillado
                    <br />
                    (сухий, глибокий стилістичний вплив, який робить профіль ще
                    темнішим і насиченим)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    <Accent>Аромат:</Accent> Торф’яне вугілля, що тліє.
                    Найтемніший і найбрутальніший профіль у всій серії.
                    <br />
                    <Accent>Смак:</Accent> Класичний торф’яний Knockdhu з
                    відтінками вологої землі. Подрібнений підсмажений мигдаль,
                    змішаний з торф’яним болотом.
                    <br />
                    <Accent>Посмак:</Accent> Маслянистий, горіховий,
                    безкомпромісний. Олійна гладкість контрастує з довгим
                    торф’яним димом, який обволікає піднебіння повністю. Північ
                    Шотландії у пляшці.
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card1>
        </ListItem>
        <ListItem>
          <Card2>
            <Name>Лохан</Name>
            <CardContent>
              <Image src={bottle2} alt='Пляшка' />
              <CardInfo>
                <CardName>BREIVAL</CardName>
                <CardInfoItem>
                  <CardTitle>вік</CardTitle>
                  <CardText>15 років</CardText>
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
                    Rivesaltes
                    <br />
                    (солодке кріплене вино, яке додає рожевий відтінок, фруктову
                    насиченість і м’яку карамельність)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    <Accent>Аромат:</Accent> Солодкі цукрові ноти з карамеллю,
                    легка ягідність. Колір набуває ніжного рожевого тону.
                    <br />
                    <Accent>Смак:</Accent> Рожа/малина з бочки зливається з
                    м’яким солодовим профілем, відкриваючи повний потенціал
                    Rivesaltes.
                    <br />
                    <Accent>Посмак:</Accent>
                    Винні ноти й сухофрукти, особливо курага. Довгий таніновий
                    фініш, який затримується на язиці.
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card2>
        </ListItem>
        <ListItem>
          <Card3>
            <Name>Кемпбел</Name>
            <CardContent>
              <Image src={bottle3} alt='Пляшка' />
              <CardInfo>
                <CardName>WILLIAMSON</CardName>
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
                    Breival
                    <br />
                    (квотеркаск, в якому витримували неназване віскі з Айли,
                    потім витримували обкурене віскі Holyrood, а потім
                    витримували в ньому наше віскі)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    <Accent>Аромат:</Accent> Феноли Laphroaig у всій своїй красі
                    та гармонії.
                    <br />
                    <Accent>Смак:</Accent> Потужні торф’яні ноти — саме те, чого
                    очікуєш від легендарної гуральні Айли.
                    <br />
                    <Accent>Посмак:</Accent> Дим й льодяники від кашлю
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card3>
        </ListItem>
        <ListItem>
          <Card4>
            <Name>Мейзі</Name>
            <CardContent>
              <Image src={bottle4} alt='Пляшка' />
              <CardInfo>
                <CardName>BALBLAIR</CardName>
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
                    Pedro Ximénez (PX)
                    <br />
                    (солодке десертне вино, що дарує густий, інжирно-виноградний
                    профіль)
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ХАРАКТЕР</CardTitle>
                  <CardText>
                    <Accent>Аромат:</Accent> Дуже насичені ноти винограду,
                    інжиру та родзинок.
                    <br />
                    <Accent>Смак:</Accent> Потужна хвиля густого виноградного
                    сиропу, що переходить у м’ятно-солону ноту.
                    <br />
                    <Accent>Посмак:</Accent> Різка м’ята прорізає солодкий PX,
                    який залишається глибоким фоном. Профіль складається з двох
                    частин: соковиті виноградини та освіжаюча солодовість
                    Balblair. Чистий приклад гармонії солоду й дерева.
                  </CardText>
                </CardInfoItem>
                <Delimiter></Delimiter>
                <CardInfoItem>
                  <CardTitle>ТИРАЖ</CardTitle>
                  <CardText>ХХХ пляшок 0,75л</CardText>
                </CardInfoItem>
              </CardInfo>
            </CardContent>
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card4>
        </ListItem>
      </List>
    </Section>
  );
};

export default BottlesSection;
