import React from 'react';

import { TbManualGearbox } from 'react-icons/tb';
import { FaRegCalendarAlt, FaRoad } from 'react-icons/fa';
import { GiCarDoor } from 'react-icons/gi';

import * as S from './CardTable.styles';

import { CardTablePropTypes } from './CardTable.types';

export default function CardTable({
    mileage,
    transmission,
    doors,
    year,
    wide = false,
}: CardTablePropTypes) {
    return (
        <S.MainContainer $wide={wide}>
            <S.InfoContainer>
                <S.Info>
                    <TbManualGearbox />
                    <p>{transmission}</p>
                </S.Info>

                <S.Info>
                    <GiCarDoor />
                    <p>{doors}</p>
                </S.Info>
            </S.InfoContainer>

            <S.InfoContainer>
                <S.Info>
                    <FaRegCalendarAlt />
                    <p>{year}</p>
                </S.Info>

                <S.Info>
                    <FaRoad />
                    <p>{mileage} mi.</p>
                </S.Info>
            </S.InfoContainer>
        </S.MainContainer>
    );
}
