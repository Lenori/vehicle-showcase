import React from 'react';

import PopularAuctions from 'components/PopularAuctions/PopularAuctions';

import * as S from './Home.styles';

export default function Home() {
    return (
        <S.MainContainer>
            <PopularAuctions count={4} />
        </S.MainContainer>
    );
}
