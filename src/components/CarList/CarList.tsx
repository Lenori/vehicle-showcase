import React from 'react';

import { useCars } from 'context/CarsContext';

import CarCard from 'components/CarCard/CarCard';

import * as S from './CarList.styles';

export default function CarList() {
    const cars = useCars();

    return (
        <S.MainContainer>
            {cars.data.map((car) => (
                <CarCard wide key={car.id} car={car} />
            ))}
        </S.MainContainer>
    );
}
