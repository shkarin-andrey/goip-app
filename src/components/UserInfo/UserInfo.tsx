import { FC } from 'react';

import { useWebTelegramApp } from '../../hooks/useWebTelegramApp';
import { useGetUserIdQuery } from '../../redux/api/users';
import Dropdown from '../Dropdown';

const UserInfo: FC = () => {
  const { onDataUnsafe } = useWebTelegramApp();

  const user = onDataUnsafe().user;

  return (
    <div className='flex items-center gap-3 px-4 pb-4 bg-[#1F283C]'>
      <div className='w-[38px] h-[38px] rounded-full overflow-hidden'>
        <img src={user?.photo_url} alt='avatar' className='w-full h-full object-cover' />
      </div>

      <div className='flex flex-col'>
        <div className='text-[17px] text-white font-medium leading-none'>
          {[user?.first_name, user?.last_name].join(' ')}
        </div>
        <div className='text-[#5AC8FB] text-[13px]'>{user?.usernames}</div>
      </div>
      <div className='ml-auto'>
        <Dropdown />
      </div>
    </div>
  );
};

export default UserInfo;
