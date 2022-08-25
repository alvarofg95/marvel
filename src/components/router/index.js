import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'utils/routes';

const RouterControl = () => (
    <Routes>
        {routes.map(({ exact, hashPath, component, key }) => (
            <Route key={key} exact={exact} path={hashPath} element={component} />
        ))}
    </Routes>
);

export default RouterControl;
