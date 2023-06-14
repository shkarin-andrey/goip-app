import { FC, useCallback, useState } from 'react';

import Accordion from '../components/Accordion';
import Input from '../components/Input';
import Layout from '../components/Layout';
import MessagesList from '../components/MessagesList';
import { useDebounce } from '../hooks/useDebounce';
import { useWebTelegramApp } from '../hooks/useWebTelegramApp';
import { useFindAllFilteredSmsLogsQuery } from '../redux/api/smslog';
import { GateItem, GateList } from '../types/gate.interface';

const MainPage: FC = () => {
  const [selectGate, setSelectGate] = useState<GateList | null>(null);
  const [selectChannel, setSelectChannel] = useState<GateItem | null>(null);
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);

  const { onDataUnsafe } = useWebTelegramApp();

  const user_id = onDataUnsafe().user?.id || 2127564034;
  const body = {
    gateId: selectGate?.id,
    gateItemId: selectChannel?.id,
    user: user_id,
    limit: 10,
    text: debouncedValue,
  };
  const { data, isLoading, isFetching } = useFindAllFilteredSmsLogsQuery(body, {
    skip: !selectChannel?.id,
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Layout>
      <Accordion
        selectChannel={selectChannel}
        selectGate={selectGate}
        setSelectChannel={setSelectChannel}
        setSelectGate={setSelectGate}
      />
      {selectChannel?.id && (
        <>
          <Input value={value} onChange={handleChange} placeholder='Поиск по входящим' />
          <MessagesList data={data || []} loading={isLoading || isFetching} />
        </>
      )}
    </Layout>
  );
};

export default MainPage;
