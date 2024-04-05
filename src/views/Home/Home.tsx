import React from 'react';

import { useCars } from 'context/CarsContext';

import * as S from './Home.styles';

export default function Home() {
    const cars = useCars();

    return (
        <S.MainContainer>
            {cars.data.map((car) => (
                <p key={car.model}>
                    {car.make} {car.model}
                </p>
            ))}
        </S.MainContainer>
    );
}
