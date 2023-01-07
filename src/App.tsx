import React, { FC } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { useStyles } from './styles';
import { ERoutes } from './types/enums';

const App: FC = () => {
  useStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={ERoutes.search} replace />} />
        {routes.map(({ component: Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
