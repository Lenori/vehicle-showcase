import React from 'react';

import { useCars } from 'context/CarsContext';

import randomCarSlicer from 'utils/randomCarSlicer';

import * as S from './PopularAuctions.styles';

import { PopularAuctionsPropTypes } from './PopularAuctions.types';

export default function PopularAuctions({ count }: PopularAuctionsPropTypes) {
    const cars = useCars();

    const popularItems = randomCarSlicer(cars.data, count);

    return (
        <S.MainContainer>
            <S.Title>Most popular car auction deals</S.Title>

            {popularItems.map((car) => (
                <p key={car.id}>
                    {car.make} {car.model}
                </p>
            ))}
        </S.MainContainer>
    );
}
