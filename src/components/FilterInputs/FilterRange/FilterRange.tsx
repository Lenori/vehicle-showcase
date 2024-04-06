import React, { useEffect, useState } from 'react';

import * as S from './FilterRange.styles';

import { FilterRangePropTypes } from './FilterRange.types';

export default function FilterRange({ saveFilter }: FilterRangePropTypes) {
    const [min, setMin] = useState<string | number>('');
    const [max, setMax] = useState<string | number>('');

    useEffect(() => {
        saveFilter({
            minimumBid: min ? Number(min) : null,
            maximumBid: max ? Number(max) : null,
        });
    }, [min, max]);

    return (
        <S.MainContainer>
            <S.MainInput
                type="text"
                value={min}
                onChange={(e) => setMin(e.target.value)}
            />

            <S.Separator>-</S.Separator>

            <S.MainInput
                type="text"
                value={max}
                onChange={(e) => setMax(e.target.value)}
            />
        </S.MainContainer>
    );
}
