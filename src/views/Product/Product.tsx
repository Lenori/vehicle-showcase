import React from 'react';
import { useParams } from 'react-router-dom';

import { useCars } from 'context/CarsContext';

import Header from 'components/Header/Header';
import CarPage from 'components/CarPage/CarPage';

import * as S from './Product.styles';

export default function Product() {
    const { id } = useParams();
    const cars = useCars();

    return (
        <S.MainContainer>
            <Header />
            <CarPage
                toggleCarFavourite={() => cars.toggleCarFavourite(Number(id))}
                car={cars.carById(Number(id))}
            />
        </S.MainContainer>
    );
}
