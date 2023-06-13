import { FC, Fragment } from 'react';

import ArrowIcon from '../../../assets/icons/ArrowIcon';
import Divider from '../../Divider';
import { IAccordionChannel } from './AccordionChannel.interface';

const AccordionChannel: FC<IAccordionChannel> = ({
  items,
  select,
  open,
  handleOpen,
  handleSelect,
  disabled,
}) => {
  return (
    <div className='pl-[14px] pr-2 bg-[#1F283C] text-white'>
      <button
        onClick={handleOpen}
        className='py-3 flex items-center justify-between cursor-pointer w-full'
        disabled={disabled}
      >
        <div
          className={`flex items-center justify-between w-full ${
            disabled ? 'text-[#6C6C6C]' : 'text-white'
          }`}
        >
          {select ? (
            <>
              <div className='flex gap-2'>
                {select.name}
                <span className={`${select.online ? 'text-[#34C759]' : 'text-red-500'}`}>
                  {select.online ? 'online' : 'offline'}
                </span>
              </div>
              <span
                className={`${select.balance > 0 ? 'text-[#34C759]' : 'text-red-500'}`}
              >
                {select.balance}
              </span>
            </>
          ) : (
            'Выберите канал'
          )}
        </div>
        <div className={`${open && 'rotate-90'} transition-all`}>
          <ArrowIcon />
        </div>
      </button>
      {open && (
        <div className='flex flex-col items-start'>
          {items.map((item) => (
            <Fragment key={item._id}>
              <Divider />
              <button
                className='py-3 flex items-center justify-between w-full'
                onClick={() => handleSelect(item)}
              >
                <div className='flex gap-2'>
                  {item.name}
                  <span className={`${item.online ? 'text-[#34C759]' : 'text-red-500'}`}>
                    {item.online ? 'online' : 'offline'}
                  </span>
                </div>
                <span
                  className={`${item.balance > 0 ? 'text-[#34C759]' : 'text-red-500'}`}
                >
                  {item.balance}
                </span>
              </button>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionChannel;
