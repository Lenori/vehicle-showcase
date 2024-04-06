import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Button.styles';

import { ButtonPropTypes } from './Button.types';

export default function Button({ link, Icon, text }: ButtonPropTypes) {
    const navigate = useNavigate();

    function clickHandler() {
        if (link) {
            navigate(link);
        }
    }

    return (
        <S.MainContainer onClick={() => clickHandler()}>
            {<Icon />} {text}
        </S.MainContainer>
    );
}
