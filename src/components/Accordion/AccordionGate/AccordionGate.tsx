import { FC, Fragment } from 'react';

import ArrowIcon from '../../../assets/icons/ArrowIcon';
import Divider from '../../Divider';
import { IAccordionGate } from './AccordionGate.interface';

const AccordionGate: FC<IAccordionGate> = ({
  data,
  select,
  open,
  handleOpen,
  handleSelect,
}) => {
  return (
    <div className='pl-[14px] pr-2 bg-[#1F283C] text-white'>
      <button
        onClick={handleOpen}
        className='py-3 flex items-center justify-between cursor-pointer w-full'
      >
        <div className='flex items-center justify-between w-full'>
          {select ? (
            <>
              <div className='flex gap-2'>
                {select.name} - шлюз
                <span className={`${select.online ? 'text-[#34C759]' : 'text-red-500'}`}>
                  {select.online ? 'online' : 'offline'}
                </span>
              </div>
              <span className='text-[#34C759]'>
                {select.items.length}/{select.num}
              </span>
            </>
          ) : (
            'Выберите шлюз'
          )}
        </div>
        <div className={`${open && 'rotate-90'} transition-all`}>
          <ArrowIcon />
        </div>
      </button>
      {open && (
        <div className='flex flex-col items-start'>
          {data.map((item) => (
            <Fragment key={item._id}>
              <Divider />
              <button
                className='py-3 flex items-center justify-between w-full'
                onClick={() => handleSelect(item)}
              >
                <div className='flex gap-2'>
                  {item.name} - шлюз
                  <span className={`${item.online ? 'text-[#34C759]' : 'text-red-500'}`}>
                    {item.online ? 'online' : 'offline'}
                  </span>
                </div>
                <span className='text-[#34C759]'>
                  {item.items.length}/{item.num}
                </span>
              </button>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionGate;
