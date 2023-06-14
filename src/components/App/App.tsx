import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routers } from '../../router';

const App: FC = () => {
  return (
    <Routes>
      {routers.map((item) => (
        <Route key={item.path} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

export default App;
