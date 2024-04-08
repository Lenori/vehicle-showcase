import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import vehiclesData from 'data/vehiclesDataset.json';

import CarCard from '../CarCard';

import valueToEuro from 'utils/valueToEuro';
import countDown from 'utils/countDown';

const car = vehiclesData[0];

test('renders car card and checks for texts', () => {
    const mockedToggleFavourite = jest.fn();

    render(
        <CarCard
            car={car}
            toggleCarFavourite={() => mockedToggleFavourite(car.id)}
        />,
        { wrapper: BrowserRouter },
    );

    const title = screen.getByText(`${car.make} - ${car.model}`);
    const price = screen.getByText(valueToEuro(car.startingBid), {
        exact: false,
    });
    const countdown = screen.getByText(countDown(car.auctionDateTime), {
        exact: false,
    });

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(countdown).toBeInTheDocument();
});
