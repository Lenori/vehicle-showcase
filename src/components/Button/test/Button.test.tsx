import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import { FaHeart } from 'react-icons/fa';

import Button from '../Button';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test('renders button with provided text and icon', () => {
    render(<Button Icon={FaHeart} text="Lorem Ipsum" />);

    const textElement = screen.getByText('Lorem Ipsum');
    const icon = screen.getByTestId('button-icon');

    expect(textElement).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
});

test('check if navigation is working after click', () => {
    const link = '/showcase';

    render(<Button link={link} Icon={FaHeart} text="Lorem Ipsum" />);

    const buttonContainer = screen.getByTestId('button-container');
    fireEvent.click(buttonContainer);

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(link);
});
