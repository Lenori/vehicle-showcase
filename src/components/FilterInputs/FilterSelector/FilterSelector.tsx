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
    const [inputValue, setInputValue] = useState<string>('');
    const [filterValue, setFilterValue] = useState<string | null>(null);

    function editInput(value: string) {
        setFilterValue(null);
        setInputValue(value);

        if (!value) {
            saveFilter?.(null);
        }
    }

    function selectOption(option: string) {
        setFilterValue(option);
        setInputValue(option);

        saveFilter?.(option);
    }

    useEffect(() => {
        if (data.length == 1) {
            selectOption(data[0]);
        }
    }, [data]);

    useEffect(() => {
        selectOption(initialValue ?? '');
    }, []);

    return (
        <S.MainContainer>
            <S.MainInput
                id={id}
                type="text"
                value={inputValue}
                onChange={(e) => editInput(e.target.value)}
                placeholder={placeholder}
            />

            {inputValue && !filterValue && (
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
