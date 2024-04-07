import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import brandsData from 'data/brandsDataset.json';

import type { FiltersPropType, BrandsPropType } from 'types/filters.types';

interface FiltersContextPropTypes {
    data: FiltersPropType;
    brands: BrandsPropType[];
    setFilters: (data: FiltersPropType) => void;
}

export const FiltersContext = createContext({});

export function FiltersProvider({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [filters, setFilters] = useState<FiltersPropType>({
        make: queryParams.get('make') || null,
        model: queryParams.get('model') || null,
        minimumBid: Number(queryParams.get('minimumBid')) || null,
        maximumBid: Number(queryParams.get('maximumBid')) || null,
        favourites: Boolean(queryParams.get('favourites')),
        itemsPerPage: Number(queryParams.get('itemsPerPage')) || 5,
        page: Number(queryParams.get('page')) || 1,
        orderBy: queryParams.get('orderBy') || 'startingBid',
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
