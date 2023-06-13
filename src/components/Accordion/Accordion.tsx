import { FC, useState } from 'react';

import { useGetGateQuery } from '../../redux/api/gate';
import { GateItem, GateList } from '../../types/gate.interface';
import Divider from '../Divider';
import AccordionChannel from './AccordionChannel';
import AccordionGate from './AccordionGate';

const Accordion: FC = () => {
  const { data } = useGetGateQuery();

  const [openChannel, setOpenChannel] = useState(false);
  const [openGate, setOpenGate] = useState(false);
  const [selectGate, setSelectGate] = useState<GateList | null>(null);
  const [selectChannel, setSelectChannel] = useState<GateItem | null>(null);

  const handleSelectChannel = (el: GateItem) => {
    setSelectChannel(el);
    setOpenChannel(false);
  };

  const handleSelectGate = (el: GateList) => {
    setSelectGate(el);
    setSelectChannel(null);
    setOpenGate(false);
    setOpenChannel(true);
  };

  const handleOpenChannel = () => {
    setOpenChannel((prev) => !prev);
  };

  const handleOpenGate = () => {
    setOpenGate((prev) => !prev);
  };

  return (
    <div className='rounded-[13px] overflow-hidden'>
      <AccordionGate
        data={data || []}
        select={selectGate}
        open={openGate}
        handleOpen={handleOpenGate}
        handleSelect={handleSelectGate}
      />
      <Divider />
      <AccordionChannel
        items={selectGate?.items || []}
        select={selectChannel}
        open={openChannel}
        handleOpen={handleOpenChannel}
        handleSelect={handleSelectChannel}
        disabled={!selectGate}
      />
    </div>
  );
};

export default Accordion;
