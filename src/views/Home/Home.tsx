import React from 'react';

import HomeBanner from 'components/HomeBanner/HomeBanner';
import PopularAuctions from 'components/PopularAuctions/PopularAuctions';

import * as S from './Home.styles';

export default function Home() {
    return (
        <S.MainContainer>
            <HomeBanner title="Shift to savings" />
            <PopularAuctions count={4} />
        </S.MainContainer>
    );
}
