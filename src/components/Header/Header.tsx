import { FC } from 'react';

import SettingsIcon from '../../assets/icons/SettingsIcon';
import { useWebTelegramApp } from '../../hooks/useWebTelegramApp';

const Header: FC = () => {
  const { onClose } = useWebTelegramApp();

  return (
    <div className='px-4 py-[14px] flex justify-between items-center bg-[#1F283C] text-white text-[17px] rounded-t-[20px]'>
      <button className='text-[#5AC8FB] cursor-pointer' onClick={onClose}>
        Отмена
      </button>
      <div className='flex flex-col items-center'>
        <div className='font-semibold'>VolPLab</div>
        <div className='text-[#6C6C6C] text-xs'>бот</div>
      </div>
      <button className='cursor-pointer'>
        <SettingsIcon />
      </button>
    </div>
  );
};

export default Header;
