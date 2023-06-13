import { FC } from 'react';

import Accordion from '../components/Accordion';
import Layout from '../components/Layout';
import Message from '../components/Message';
import { useWebTelegramApp } from '../hooks/useWebTelegramApp';
import { useFindAllFilteredSmsLogsQuery } from '../redux/api/smslog';

const MainPage: FC = () => {
  const { onDataUnsafe } = useWebTelegramApp();

  const user_id = onDataUnsafe().user?.id || 940222589;
  const body = {
    gateId: 'g1',
    gateItemId: 'g1l7',
    user: user_id,
    limit: 5,
  };
  const { data } = useFindAllFilteredSmsLogsQuery(body);

  console.log(data);

  return (
    <Layout>
      <Accordion />
      <div className='my-5'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </Layout>
  );
};

export default MainPage;
