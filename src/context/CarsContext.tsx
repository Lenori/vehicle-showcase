import React, { createContext, useContext, useState } from 'react';

import type { CarPropType } from 'types/cars.types';

import vehiclesData from 'data/vehiclesDataset.json';

interface CarsContextPropTypes {
    data: CarPropType[];
    setCars: (data: CarPropType[]) => void;
}

export const CarsContext = createContext({});

export function CarsProvider({ children }: { children: React.ReactNode }) {
    const [cars, setCars] = useState<CarPropType[]>(vehiclesData);

    return (
        <CarsContext.Provider value={{ data: cars, setCars }}>
            {children}
        </CarsContext.Provider>
    );
}

export function useCars() {
    return useContext(CarsContext) as CarsContextPropTypes;
}
