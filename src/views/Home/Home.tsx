import React from 'react';

import { useFilters } from 'context/FiltersContext';

import HomeBanner from 'components/HomeBanner/HomeBanner';
import HomeFilter from 'components/HomeFilter/HomeFilter';
import PopularAuctions from 'components/PopularAuctions/PopularAuctions';

import * as S from './Home.styles';

export default function Home() {
    const filters = useFilters();

    return (
        <S.MainContainer>
            <HomeBanner title="Shift to savings" />
            <HomeFilter />

            <p>{JSON.stringify(filters.data)}</p>
            <PopularAuctions count={4} />
        </S.MainContainer>
    );
}
