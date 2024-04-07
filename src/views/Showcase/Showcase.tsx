import React from 'react';

import SidebarFilter from 'components/SidebarFilter/SidebarFilter';
import CarList from 'components/CarList/CarList';

import * as S from './Showcase.styles';

export default function Showcase() {
    return (
        <S.MainContainer>
            <S.ContentContainer>
                <SidebarFilter />
                <CarList />
            </S.ContentContainer>
        </S.MainContainer>
    );
}
