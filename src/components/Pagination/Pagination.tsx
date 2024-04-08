import React from 'react';

import { useFilters } from 'context/FiltersContext';
import { useCars } from 'context/CarsContext';

import paginationControl from 'utils/paginationControl';

import * as S from './Pagination.styles';

export default function Pagination() {
    const cars = useCars();
    const filters = useFilters();

    const totalPages = Math.ceil(
        cars.unpaginatedCars.length / filters.data.itemsPerPage,
    );

    return (
        <S.MainContainer>
            {filters.data.page > 4 && (
                <S.Page
                    $selected={1 === filters.data.page}
                    onClick={() =>
                        filters.setFilters({
                            ...filters.data,
                            page: 1,
                        })
                    }
                >
                    {1}
                </S.Page>
            )}

            {filters.data.page > 5 && <S.Dots>...</S.Dots>}

            {paginationControl({
                total: totalPages,
                current: filters.data.page,
            }).map((page) => (
                <S.Page
                    $selected={page === filters.data.page}
                    key={page}
                    onClick={() =>
                        filters.setFilters({
                            ...filters.data,
                            page: page,
                        })
                    }
                >
                    {page}
                </S.Page>
            ))}

            {filters.data.page <= totalPages - 5 && <S.Dots>...</S.Dots>}

            {filters.data.page <= totalPages - 4 && (
                <S.Page
                    $selected={totalPages === filters.data.page}
                    onClick={() =>
                        filters.setFilters({
                            ...filters.data,
                            page: totalPages,
                        })
                    }
                >
                    {totalPages}
                </S.Page>
            )}
        </S.MainContainer>
    );
}
