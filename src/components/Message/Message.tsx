import moment from 'moment';
import { FC } from 'react';

import Divider from '../Divider';
import { IMessage } from './Message.interface';

const Message: FC<IMessage> = ({ msg, time, name, sender }) => {
  const formatTime = moment(time).format('hh:mm DD.MM.YYYY');

  return (
    <>
      <div className='flex gap-2 pt-[6px] pb-3'>
        <div className='w-[60px] h-[60px] rounded-full flex justify-center items-center text-white text-xl font-medium bg-orange-500'>
          {name}
        </div>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <div className='text-[17px] text-white font-medium'>{sender}</div>
            <div className='text-[#5AC8FB] text-[13px]'>{formatTime}</div>
          </div>
          <div className='text-[#6C6C6C] text-[15px]'>{msg}</div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Message;
