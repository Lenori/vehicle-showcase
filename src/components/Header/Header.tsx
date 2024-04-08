import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Header.styles';

export default function Header() {
    return (
        <S.MainContainer>
            <Link to="/">Home</Link>
            <Link to="/showcase">Showcase</Link>
        </S.MainContainer>
    );
}
