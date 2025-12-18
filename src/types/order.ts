export interface IContactsForm {
  name: string;
  phone: string;
  email: string;
  bottle_alias: string;
}

export type BarrelAlias = 'KNOCKDHU' | 'BREIVAL' | 'WILLIAMSON' | 'BALBLAIR';

export interface IBarrelSetting {
  alias: BarrelAlias;
  amount: string;
  orders: string;
}
