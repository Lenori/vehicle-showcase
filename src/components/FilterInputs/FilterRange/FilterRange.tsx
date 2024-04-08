import React, { useEffect, useState } from 'react';

import * as S from './FilterRange.styles';

import { FilterRangePropTypes } from './FilterRange.types';

export default function FilterRange({
    id,
    initialValue,
    saveFilter,
}: FilterRangePropTypes) {
    const [min, setMin] = useState<string | number>('');
    const [max, setMax] = useState<string | number>('');

    useEffect(() => {
        saveFilter({
            minimumBid: min ? Number(min) : null,
            maximumBid: max ? Number(max) : null,
        });
    }, [min, max]);

    useEffect(() => {
        setMin(initialValue?.minimumBid ?? '');
        setMax(initialValue?.maximumBid ?? '');
    }, [initialValue]);

    return (
        <S.MainContainer>
            <S.MainInput
                id={`${id}-min`}
                type="text"
                value={min}
                onChange={(e) => setMin(e.target.value)}
            />

            <S.Separator>-</S.Separator>

            <S.MainInput
                id={`${id}-max`}
                type="text"
                value={max}
                onChange={(e) => setMax(e.target.value)}
            />
        </S.MainContainer>
    );
}
