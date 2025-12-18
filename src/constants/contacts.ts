import { BarrelAlias } from '@/types/order';

export interface IBarrelOption {
  label: string;
  value: BarrelAlias;
}

const barrels: IBarrelOption[] = [
  { label: 'Мейзі Едертон', value: 'KNOCKDHU' },
  { label: 'Містер Кемпбел', value: 'BALBLAIR' },
  { label: 'Лохан Чепелтон', value: 'WILLIAMSON' },
  { label: 'Рорі Нок', value: 'BREIVAL' },
];

export default { barrels };
