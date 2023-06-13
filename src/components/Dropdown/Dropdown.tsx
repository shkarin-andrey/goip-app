import { FC, useCallback, useRef, useState } from 'react';

import SettingsIcon from '../../assets/icons/SettingsIcon';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Divider from '../Divider';

const Dropdown: FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useOutsideClick(ref, handleClose, open);

  const data = [
    {
      title: 'Пользователи',
    },
    { type: 'divider' },
    {
      title: 'Создание шлюза',
    },
    { type: 'divider' },
    {
      title: 'Настройка оператора',
    },
  ];

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <div className='relative'>
      <button ref={ref} onClick={handleOpen} className='cursor-pointer'>
        <SettingsIcon />
      </button>
      {open && (
        <div className='absolute right-0 rounded-[13px] bg-[#1F283C]'>
          {data.map((item, index) => {
            if (item.type === 'divider') {
              return <Divider key={[item.type, index].join('_')} />;
            }

            return (
              <div
                key={[item.title, index].join('_')}
                className='text-[17px] px-4 py-[14px] whitespace-nowrap cursor-pointer text-white'
              >
                {item.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
