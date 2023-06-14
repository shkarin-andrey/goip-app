import { FC } from 'react';

import Loader from '../Loader';
import Message from '../Message';
import { IMessagesList } from './MessagesList.interface';

const MessagesList: FC<IMessagesList> = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className='my-5'>
      {data?.map((item) => (
        <Message
          key={item._id}
          msg={item.msg}
          time={item.receive}
          name={item.id}
          sender={item.password}
        />
      ))}
    </div>
  );
};

export default MessagesList;
