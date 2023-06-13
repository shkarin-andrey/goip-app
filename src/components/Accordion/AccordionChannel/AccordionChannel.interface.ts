import { GateItem } from '../../../types/gate.interface';

export interface IAccordionChannel {
  items: GateItem[];
  select: GateItem | null;
  open: boolean;
  handleOpen: () => void;
  handleSelect: (el: GateItem) => void;
  disabled: boolean;
}
