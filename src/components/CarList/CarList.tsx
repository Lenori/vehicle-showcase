import React from 'react';

import { useCars } from 'context/CarsContext';

import ListControls from 'components/ListControls/ListControls';
import CarCard from 'components/CarCard/CarCard';
import Pagination from 'components/Pagination/Pagination';

import * as S from './CarList.styles';

export default function CarList() {
    const cars = useCars();

    return (
        <S.MainContainer>
            <ListControls />

            {cars.data.map((car) => (
                <CarCard
                    wide
                    key={car.id}
                    car={car}
                    toggleCarFavourite={() => cars.toggleCarFavourite(car.id)}
                />
            ))}

            <Pagination />
        </S.MainContainer>
    );
}
