import React from 'react';

import { FaSearch } from 'react-icons/fa';

import { useFilters } from 'context/FiltersContext';

import { brandArrayBuilder, modelArrayBuilder } from 'utils/arrayBuilder';
import filterUrlBuilder from 'utils/filterUrlBuilder';

import FilterSelector from 'components/FilterInputs/FilterSelector/FilterSelector';
import FilterRange from 'components/FilterInputs/FilterRange/FilterRange';

import Button from 'components/Button/Button';

import * as S from './HomeFilter.styles';

export default function HomeFilter() {
    const filters = useFilters();

    return (
        <S.MainContainer>
            <S.FilterContainer>
                <S.FilterTitle>Make</S.FilterTitle>
                <FilterSelector
                    id="make-selector"
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
                    id="model-selector"
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
                    id="bid-range"
                    saveFilter={({ minimumBid, maximumBid }) =>
                        filters.setFilters({
                            ...filters.data,
                            minimumBid,
                            maximumBid,
                        })
                    }
                />
            </S.FilterContainer>

            <Button
                link={filterUrlBuilder({
                    base: 'showcase',
                    filters: filters.data,
                })}
                Icon={FaSearch}
                text="Search"
            />
        </S.MainContainer>
    );
}
