import React, { createContext, useContext, useState } from 'react';

import brandsData from 'data/brandsDataset.json';

import type { FiltersPropType, BrandsPropType } from 'types/filters.types';

interface FiltersContextPropTypes {
    data: FiltersPropType;
    brands: BrandsPropType[];
    setFilters: (data: FiltersPropType) => void;
}

export const FiltersContext = createContext({});

export function FiltersProvider({ children }: { children: React.ReactNode }) {
    const [filters, setFilters] = useState<FiltersPropType>({
        make: null,
        model: null,
        minimumBid: null,
        maximumBid: null,
        favourites: false,
    });

    const brands: BrandsPropType[] = brandsData;

    return (
        <FiltersContext.Provider value={{ data: filters, brands, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
}

export function useFilters() {
    return useContext(FiltersContext) as FiltersContextPropTypes;
}
