import { FC, useCallback, useState } from 'react';

import { useGetGateQuery } from '../../redux/api/gate';
import { GateItem, GateList } from '../../types/gate.interface';
import Divider from '../Divider';
import AccordionChannel from './AccordionChannel';
import AccordionGate from './AccordionGate';

interface IAccordion {
  selectGate: GateList | null;
  selectChannel: GateItem | null;
  setSelectGate: React.Dispatch<React.SetStateAction<GateList | null>>;
  setSelectChannel: React.Dispatch<React.SetStateAction<GateItem | null>>;
}

const Accordion: FC<IAccordion> = ({
  selectGate,
  selectChannel,
  setSelectGate,
  setSelectChannel,
}) => {
  const { data } = useGetGateQuery();

  const [openChannel, setOpenChannel] = useState(false);
  const [openGate, setOpenGate] = useState(false);

  const handleSelectChannel = useCallback((el: GateItem) => {
    setSelectChannel(el);
    setOpenChannel(false);
  }, []);

  const handleSelectGate = useCallback((el: GateList) => {
    setSelectGate(el);
    setSelectChannel(null);
    setOpenGate(false);
    setOpenChannel(true);
  }, []);

  const handleOpenChannel = useCallback(() => {
    setOpenChannel((prev) => !prev);
  }, []);

  const handleOpenGate = useCallback(() => {
    setOpenGate((prev) => !prev);
  }, []);

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
