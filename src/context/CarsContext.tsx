import React, { createContext, useContext, useState, useEffect } from 'react';

import { useFilters } from './FiltersContext';

import type { CarPropType } from 'types/cars.types';

import vehiclesData from 'data/vehiclesDataset.json';

import filterCars from 'utils/filterCars';
import paginateCars from 'utils/paginateCars';

interface CarsContextPropTypes {
    data: CarPropType[];
    unpaginatedCars: CarPropType[];
    setCars: (data: CarPropType[]) => void;
    toggleCarFavourite: (id: number) => void;
}

const storageKey = 'showcase_cars_storage';

function getStorageItem(): CarPropType[] {
    const storedCars = sessionStorage.getItem(storageKey);
    if (!storedCars) return null;

    return JSON.parse(storedCars);
}

export const CarsContext = createContext({});

export function CarsProvider({ children }: { children: React.ReactNode }) {
    const filters = useFilters();

    const [cars, setCars] = useState<CarPropType[]>(
        getStorageItem() || vehiclesData,
    );

    const [filteredCars, setFilteredCars] = useState<CarPropType[]>(
        filterCars({
            filters: filters.data,
            cars,
        }),
    );

    const [paginatedCars, setPaginatedCars] = useState<CarPropType[]>(
        paginateCars({
            filters: filters.data,
            cars: filteredCars,
        }),
    );

    function toggleCarFavourite(id: number) {
        const carIndex = cars.findIndex((item) => item.id === id);

        if (carIndex < 0) return null;

        cars[carIndex].favourite = !cars[carIndex].favourite;
        sessionStorage.setItem(storageKey, JSON.stringify(cars));

        setCars([...cars]);
    }

    useEffect(() => {
        setFilteredCars(
            filterCars({
                filters: filters.data,
                cars,
            }),
        );
    }, [filters.data, cars]);

    useEffect(() => {
        setPaginatedCars(
            paginateCars({
                filters: filters.data,
                cars: filteredCars,
            }),
        );
    }, [filters.data, filteredCars]);

    return (
        <CarsContext.Provider
            value={{
                data: paginatedCars,
                unpaginatedCars: filteredCars,
                setCars,
                toggleCarFavourite,
            }}
        >
            {children}
        </CarsContext.Provider>
    );
}

export function useCars() {
    return useContext(CarsContext) as CarsContextPropTypes;
}
