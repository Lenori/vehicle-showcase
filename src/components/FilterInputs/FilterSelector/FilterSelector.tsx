import React from 'react';

import * as S from './FilterSelector.styles';

import { FilterSelectorPropTypes } from './FilterSelector.types';

export default function FilterSelector({
    placeholder,
}: FilterSelectorPropTypes) {
    return <S.MainInput type="text" placeholder={placeholder} />;
}
