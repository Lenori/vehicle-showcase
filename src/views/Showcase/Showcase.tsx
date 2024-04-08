import React, { useEffect } from 'react';

import Header from 'components/Header/Header';
import SidebarFilter from 'components/SidebarFilter/SidebarFilter';
import CarList from 'components/CarList/CarList';

import * as S from './Showcase.styles';

export default function Showcase() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <S.MainContainer>
            <Header />
            <S.ContentContainer>
                <SidebarFilter />
                <CarList />
            </S.ContentContainer>
        </S.MainContainer>
    );
}
