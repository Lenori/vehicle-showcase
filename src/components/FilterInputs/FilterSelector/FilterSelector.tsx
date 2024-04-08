import React, { useEffect, useState } from 'react';

import * as S from './FilterSelector.styles';

import { FilterSelectorPropTypes } from './FilterSelector.types';

export default function FilterSelector({
    id,
    placeholder,
    data,
    initialValue,
    saveFilter,
}: FilterSelectorPropTypes) {
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<string | null>(null);

    function selectOption(option: string) {
        setFilterValue(option);
        setOpenOptions(false);

        saveFilter?.(option);
    }

    useEffect(() => {
        if (data.length == 1) {
            selectOption(data[0]);
        }
    }, [data]);

    useEffect(() => {
        selectOption(initialValue ?? '');
    }, [initialValue]);

    return (
        <S.MainContainer>
            <S.MainInput
                id={id}
                type="text"
                value={filterValue ?? ''}
                onClick={() => setOpenOptions(true)}
                placeholder={placeholder}
                readOnly
            />

            {openOptions && (
                <S.OptionsContainer>
                    {data.map((option) => (
                        <S.Option
                            key={option}
                            onClick={() => selectOption(option)}
                        >
                            {option}
                        </S.Option>
                    ))}
                </S.OptionsContainer>
            )}
        </S.MainContainer>
    );
}
