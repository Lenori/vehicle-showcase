import React, { createContext, useContext, useState, useEffect } from 'react';

import { useFilters } from './FiltersContext';

import type { CarPropType } from 'types/cars.types';

import vehiclesData from 'data/vehiclesDataset.json';

import filterCars from 'utils/filterCars';

interface CarsContextPropTypes {
    data: CarPropType[];
    setCars: (data: CarPropType[]) => void;
}

export const CarsContext = createContext({});

export function CarsProvider({ children }: { children: React.ReactNode }) {
    const filters = useFilters();

    const [cars, setCars] = useState<CarPropType[]>(vehiclesData);
    const [filteredCars, setFilteredCars] = useState<CarPropType[]>(cars);

    useEffect(() => {
        setFilteredCars(
            filterCars({
                filters: filters.data,
                cars,
            }),
        );
    }, [filters.data]);

    return (
        <CarsContext.Provider value={{ data: filteredCars, setCars }}>
            {children}
        </CarsContext.Provider>
    );
}

export function useCars() {
    return useContext(CarsContext) as CarsContextPropTypes;
}
