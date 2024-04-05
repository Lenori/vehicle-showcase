import React from 'react';

import { FaSearch } from 'react-icons/fa';

import FilterSelector from 'components/FilterInputs/FilterSelector/FilterSelector';

import Button from 'components/Button/Button';

import * as S from './HomeFilter.styles';

export default function HomeFilter() {
    return (
        <S.MainContainer>
            <S.FilterContainer>
                <p>Make</p>
                <FilterSelector placeholder="e.g. Ford" />
            </S.FilterContainer>

            <S.FilterContainer>
                <p>Model</p>
                <FilterSelector placeholder="e.g. Focus" />
            </S.FilterContainer>

            <S.FilterContainer>
                <p>Starting bid</p>
                <FilterSelector placeholder="e.g. 10000" />
            </S.FilterContainer>

            <Button Icon={FaSearch} text="Search" />
        </S.MainContainer>
    );
}
