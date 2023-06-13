import React, { FC } from 'react';

import { useWebTelegramApp } from '../../hooks/useWebTelegramApp';
import { useGetUserIdQuery } from '../../redux/api/users';

const UserInfo: FC = () => {
  const { onDataUnsafe, onData } = useWebTelegramApp();

  const user_id = onDataUnsafe().user?.id || 940222589;
  console.log(onData());

  const { data } = useGetUserIdQuery(user_id);

  console.log(data);

  return (
    <div className='flex items-center gap-3 px-4 pb-4 bg-[#1F283C]'>
      <div className='w-[38px] h-[38px] rounded-full overflow-hidden'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg'
          alt='avatar'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='flex flex-col'>
        <div className='text-[17px] text-white font-medium leading-none'>
          Анна Плетнева
        </div>
        <div className='text-[#5AC8FB] text-[13px]'>@privet343</div>
      </div>
    </div>
  );
};

export default UserInfo;
