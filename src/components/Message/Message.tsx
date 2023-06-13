import { FC } from 'react';

import Divider from '../Divider';

const Message: FC = () => {
  return (
    <>
      <div className='flex gap-2 pt-[6px] pb-3'>
        <div className='w-[60px] h-[60px] rounded-full overflow-hidden'>
          <img
            src='https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144847501.jpg'
            alt='Message'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <div className='text-[17px] text-white font-medium'>Title</div>
            <div className='text-[#5AC8FB] text-[13px]'>22.03.2010</div>
          </div>
          <div className='text-[#6C6C6C] text-[15px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi dicta, ab
            placeat impedit nam fuga?
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Message;
