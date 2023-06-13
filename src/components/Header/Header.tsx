import { FC } from 'react';

import SettingsIcon from '../../assets/icons/SettingsIcon';

const Header: FC = () => {
  return (
    <div className='px-4 py-[14px] flex justify-between items-center bg-[#1F283C] text-white text-[17px]'>
      <div className='text-[#5AC8FB] cursor-pointer'>Отмена</div>
      <div className='flex flex-col items-center'>
        <div className='font-semibold'>VolPLab</div>
        <div className='text-[#6C6C6C] text-xs'>бот</div>
      </div>
      <div className='cursor-pointer'>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Header;
