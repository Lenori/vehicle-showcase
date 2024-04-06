import React, { useState, useEffect } from 'react';

import { useCars } from 'context/CarsContext';

import { CarPropType } from 'types/cars.types';

import randomCarSlicer from 'utils/randomCarSlicer';

import CarCard from 'components/CarCard/CarCard';

import * as S from './PopularAuctions.styles';

import { PopularAuctionsPropTypes } from './PopularAuctions.types';

export default function PopularAuctions({ count }: PopularAuctionsPropTypes) {
    const cars = useCars();

    const [popularItems, setPopularItems] = useState<CarPropType[]>([]);

    useEffect(() => {
        setPopularItems(randomCarSlicer(cars.data, count));
    }, []);

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
