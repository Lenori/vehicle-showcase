import React, { useEffect, useState } from 'react';

import * as S from './FilterCheckbox.styles';

import { FilterCheckboxPropTypes } from './FilterCheckbox.types';

export default function FilterCheckbox({
    id,
    initialValue,
    saveFilter,
}: FilterCheckboxPropTypes) {
    const [inputValue, setInputValue] = useState<boolean>(false);

    function editInput(value: boolean) {
        setInputValue(value);

        saveFilter?.(value);
    }

    useEffect(() => {
        editInput(initialValue);
    }, []);

    return (
        <S.MainContainer>
            <S.MainInput
                id={id}
                type="checkbox"
                checked={inputValue}
                onChange={(e) => editInput(e.target.checked)}
            />
        </S.MainContainer>
    );
}
