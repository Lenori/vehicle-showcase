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
}

export const CarsContext = createContext({});

export function CarsProvider({ children }: { children: React.ReactNode }) {
    const filters = useFilters();

    const [cars, setCars] = useState<CarPropType[]>(vehiclesData);
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

    useEffect(() => {
        setFilteredCars(
            filterCars({
                filters: filters.data,
                cars,
            }),
        );
    }, [filters.data]);

    useEffect(() => {
        setPaginatedCars(
            paginateCars({
                filters: filters.data,
                cars: filteredCars,
            }),
        );
    }, [filteredCars]);

    return (
        <CarsContext.Provider
            value={{
                data: paginatedCars,
                unpaginatedCars: filteredCars,
                setCars,
            }}
        >
            {children}
        </CarsContext.Provider>
    );
}

export function useCars() {
    return useContext(CarsContext) as CarsContextPropTypes;
}
