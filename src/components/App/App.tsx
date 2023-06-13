import { FC } from 'react';

import Header from '../Header';
import UserInfo from '../UserInfo';

const App: FC = () => {
  return (
    <div className='bg-[#1C1936] h-screen overflow-y-auto'>
      <Header />
      <UserInfo />
    </div>
  );
};

export default App;
