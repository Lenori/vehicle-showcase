import React from 'react';
import { Link } from 'react-router-dom';

import defaultcarimg from 'images/default-car-picture.jpg';

import { FaHeart, FaClock } from 'react-icons/fa';

import valueToEuro from 'utils/valueToEuro';
import countDown from 'utils/countDown';

import * as S from './CarCard.styles';

import { CarCardPropTypes } from './CarCard.types';

import CardTable from './components/CardTable/CardTable';

export default function CarCard({
    wide = false,
    car,
    toggleCarFavourite,
}: CarCardPropTypes) {
    return (
        <S.MainContainer $wide={wide}>
            <S.FavouriteBadge $favourite={car.favourite}>
                <FaHeart
                    data-testid="favourite-toggler"
                    onClick={() => toggleCarFavourite()}
                />
            </S.FavouriteBadge>

            <Link to={`/product/${car.id}/${car.model}`}>
                <S.CardImage src={defaultcarimg} alt={car.model} />
                <S.CardTitle>{`${car.make} - ${car.model}`}</S.CardTitle>

                <CardTable
                    mileage={car.mileage}
                    transmission={car.details.specification.transmission}
                    doors={car.details.specification.numberOfDoors}
                    year={car.year}
                    wide={wide}
                />

                <S.CardFooter>
                    <S.CardPricing>
                        {valueToEuro(car.startingBid)}
                        <FaClock />
                        {countDown(car.auctionDateTime)}
                    </S.CardPricing>
                </S.CardFooter>
            </Link>
        </S.MainContainer>
    );
}
