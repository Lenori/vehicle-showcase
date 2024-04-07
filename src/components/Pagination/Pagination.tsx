import React from 'react';

import { useFilters } from 'context/FiltersContext';
import { useCars } from 'context/CarsContext';

import * as S from './Pagination.styles';

export default function Pagination() {
    const cars = useCars();
    const filters = useFilters();

    const totalPages = Math.ceil(
        cars.unpaginatedCars.length / filters.data.itemsPerPage,
    );

    return (
        <S.MainContainer>
            {Array(totalPages)
                .fill(null)
                .map((_, index) => (
                    <S.Page
                        $selected={index + 1 === filters.data.page}
                        key={index + 1}
                        onClick={() =>
                            filters.setFilters({
                                ...filters.data,
                                page: index + 1,
                            })
                        }
                    >
                        {index + 1}
                    </S.Page>
                ))}
        </S.MainContainer>
    );
}
