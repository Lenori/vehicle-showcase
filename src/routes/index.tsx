import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'views/Home/Home';
import Showcase from 'views/Showcase/Showcase';
import Product from 'views/Product/Product';

export default function RouteManager() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/product/:id/:name" element={<Product />} />
        </Routes>
    );
}
