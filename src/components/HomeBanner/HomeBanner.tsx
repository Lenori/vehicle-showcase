import React from 'react';

import * as S from './HomeBanner.styles';

import { HomeBannerPropTypes } from './HomeBanner.types';

export default function HomeBanner({ title }: HomeBannerPropTypes) {
    return (
        <S.MainContainer>
            <S.BannerTitle>{title}</S.BannerTitle>
        </S.MainContainer>
    );
}
