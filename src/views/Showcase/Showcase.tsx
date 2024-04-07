import React, { useEffect } from 'react';

import SidebarFilter from 'components/SidebarFilter/SidebarFilter';
import CarList from 'components/CarList/CarList';

import * as S from './Showcase.styles';

export default function Showcase() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <S.MainContainer>
            <S.ContentContainer>
                <SidebarFilter />
                <CarList />
            </S.ContentContainer>
        </S.MainContainer>
    );
}
