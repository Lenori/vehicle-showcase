import React from 'react';

import * as S from './EmptyState.styles';

export default function EmptyState() {
    return (
        <S.MainContainer>
            <h2>0 items match your criteria.</h2>

            <p>Try changing your filters to a more broader range of options.</p>
        </S.MainContainer>
    );
}
