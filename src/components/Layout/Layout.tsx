import { FC } from 'react';

import Header from '../Header';
import UserInfo from '../UserInfo';
import { ILayout } from './Layout.interface';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className='bg-[#1C1936] h-screen overflow-y-auto'>
      <Header />
      <UserInfo />
      <div className='p-4 h-full'>{children}</div>
    </div>
  );
};

export default Layout;
