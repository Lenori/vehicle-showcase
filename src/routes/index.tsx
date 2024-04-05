import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home/Home';

export default function RouteManager() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
