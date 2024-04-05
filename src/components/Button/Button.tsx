import React from 'react';

import * as S from './Button.styles';

import { ButtonPropTypes } from './Button.types';

export default function Button({ Icon, text }: ButtonPropTypes) {
    return (
        <S.MainContainer>
            {<Icon />} {text}
        </S.MainContainer>
    );
}
