import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import RouteManager from './routes';
import GlobalStyle from './styles/global';

import { FiltersProvider } from 'context/FiltersContext';
import { CarsProvider } from 'context/CarsContext';

function App() {
    return (
        <BrowserRouter>
            <FiltersProvider>
                <CarsProvider>
                    <RouteManager />
                    <GlobalStyle />
                </CarsProvider>
            </FiltersProvider>
        </BrowserRouter>
    );
}

export default App;
