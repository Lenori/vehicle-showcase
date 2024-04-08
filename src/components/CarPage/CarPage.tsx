import React, { useEffect } from 'react';

import defaultcarimg from 'images/default-car-picture.jpg';

import { FaHeart } from 'react-icons/fa';

import valueToEuro from 'utils/valueToEuro';
import { countDown } from 'utils/countDown';

import CardTable from './components/CardTable/CardTable';
import InfoTable from './components/InfoTable/InfoTable';

import * as S from './CarPage.styles';

import { CarPagePropTypes } from './CarPage.types';

export default function CarPage({ car, toggleCarFavourite }: CarPagePropTypes) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <S.MainContainer>
            <S.HeaderInfo>
                <S.CardImage src={defaultcarimg} alt={car.model} />

                <S.SideContent>
                    <S.SideTitle>
                        <S.CardTitle>{`${car.make} - ${car.model}`}</S.CardTitle>
                        <S.FavouriteBadge $favourite={car.favourite}>
                            <FaHeart onClick={() => toggleCarFavourite()} />
                        </S.FavouriteBadge>
                    </S.SideTitle>

                    <CardTable
                        mileage={car.mileage}
                        transmission={car.details.specification.transmission}
                        doors={car.details.specification.numberOfDoors}
                        year={car.year}
                    />

                    <S.CardPricing>
                        <S.CardPrice>
                            {valueToEuro(car.startingBid)}
                        </S.CardPrice>
                        <S.CardCountdown>
                            {countDown(car.auctionDateTime)}
                        </S.CardCountdown>
                    </S.CardPricing>

                    <InfoTable car={car} />
                </S.SideContent>
            </S.HeaderInfo>
        </S.MainContainer>
    );
}
