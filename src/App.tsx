import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import RouteManager from './routes';
import GlobalStyle from './styles/global';

import { CarsProvider } from 'context/CarsContext';

function App() {
    return (
        <BrowserRouter>
            <CarsProvider>
                <RouteManager />
                <GlobalStyle />
            </CarsProvider>
        </BrowserRouter>
    );
}

export default App;
