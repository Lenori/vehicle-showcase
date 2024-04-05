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
            {popularItems.map((car) => (
                <p key={car.model}>
                    {car.make} {car.model}
                </p>
            ))}
        </S.MainContainer>
    );
}
