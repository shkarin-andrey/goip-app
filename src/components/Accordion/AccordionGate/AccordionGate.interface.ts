import { GateList } from '../../../types/gate.interface';

export interface IAccordionGate {
  data: GateList[];
  select: GateList | null;
  open: boolean;
  handleOpen: () => void;
  handleSelect: (el: GateList) => void;
}
