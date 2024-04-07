import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFilters } from 'context/FiltersContext';

import { brandArrayBuilder, modelArrayBuilder } from 'utils/arrayBuilder';
import filterUrlBuilder from 'utils/filterUrlBuilder';

import FilterSelector from 'components/FilterInputs/FilterSelector/FilterSelector';
import FilterRange from 'components/FilterInputs/FilterRange/FilterRange';

import * as S from './SidebarFilter.styles';

export default function SidebarFilter() {
    const filters = useFilters();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(
            filterUrlBuilder({
                base: 'showcase',
                filters: filters.data,
            }),
        );
    }, [filters.data]);

    return (
        <S.MainContainer>
            <S.FilterContainer>
                <S.FilterTitle>Make</S.FilterTitle>
                <FilterSelector
                    initialValue={filters.data.make}
                    data={brandArrayBuilder({
                        brands: filters.brands,
                        make: filters.data.make,
                        model: filters.data.model,
                    })}
                    placeholder="e.g. Ford"
                    saveFilter={(value) =>
                        filters.setFilters({ ...filters.data, make: value })
                    }
                />
            </S.FilterContainer>

            <S.FilterContainer>
                <S.FilterTitle>Model</S.FilterTitle>
                <FilterSelector
                    initialValue={filters.data.model}
                    data={modelArrayBuilder({
                        brands: filters.brands,
                        make: filters.data.make,
                    })}
                    placeholder="e.g. Focus"
                    saveFilter={(value) =>
                        filters.setFilters({ ...filters.data, model: value })
                    }
                />
            </S.FilterContainer>

            <S.FilterContainer>
                <S.FilterTitle>Bid range</S.FilterTitle>
                <FilterRange
                    initialValue={{
                        minimumBid: filters.data.minimumBid,
                        maximumBid: filters.data.maximumBid,
                    }}
                    saveFilter={({ minimumBid, maximumBid }) =>
                        filters.setFilters({
                            ...filters.data,
                            minimumBid,
                            maximumBid,
                        })
                    }
                />
            </S.FilterContainer>
        </S.MainContainer>
    );
}
