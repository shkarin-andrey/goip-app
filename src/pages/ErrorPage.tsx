import { FC } from 'react';

import Layout from '../components/Layout';

const ErrorPage: FC = () => {
  return (
    <Layout>
      <div className='h-full w-full flex flex-col justify-center items-center text-white'>
        <h1 className='text-6xl'>404</h1>
        <div>Страница не найдена.</div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
