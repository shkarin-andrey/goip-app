export interface GateList {
  _id: string;
  id: string;
  color: string;
  goipAddr: string;
  goipLogin: string;
  goipPass: string;
  host: string;
  items: GateItem[];
  name: Name;
  num: number;
  online: boolean;
  port: string;
  __v: number;
}

export interface GateItem {
  _id: string;
  id: string;
  name: Name;
  timestamp: Date;
  balance: number;
  currency: Currency;
  online: boolean;
  color: string;
  __v: number;
}

export enum Currency {
  Ru = 'ru',
  Rub = 'rub',
}

export enum Name {
  MtsRus = 'MTS-RUS',
  Ru8 = 'RU8',
}
