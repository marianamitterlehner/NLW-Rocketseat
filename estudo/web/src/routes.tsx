import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom'; //mais utilizado para rotas no navegador

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component = {Home} path="/" exact/> 
            <Route component = {CreatePoint} path="/create-point" />
        </BrowserRouter>
    )
}

export default Routes;