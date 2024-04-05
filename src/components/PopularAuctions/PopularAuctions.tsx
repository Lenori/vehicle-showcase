import React from 'react';

import { useCars } from 'context/CarsContext';

import randomCarSlicer from 'utils/randomCarSlicer';

import CarCard from 'components/CarCard/CarCard';

import * as S from './PopularAuctions.styles';

import { PopularAuctionsPropTypes } from './PopularAuctions.types';

export default function PopularAuctions({ count }: PopularAuctionsPropTypes) {
    const cars = useCars();

    const popularItems = randomCarSlicer(cars.data, count);

    return (
        <S.MainContainer>
            <S.Title>Most popular car auction deals</S.Title>

            <S.PopularContainer>
                {popularItems.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </S.PopularContainer>
        </S.MainContainer>
    );
}
