import styled, { css } from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    padding: var(--spacing-m);
`;

export const HeaderInfo = styled.section`
    display: flex;
    align-items: flex-start;
    width: 100%;
`;

export const SideContent = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`;

export const SideTitle = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: var(--spacing-m);
`;

export const FavouriteBadge = styled.section<{ $favourite: boolean }>`
    color: var(--light-grey);
    cursor: pointer;

    ${(props) =>
        props.$favourite &&
        css`
            color: var(--main-red);
        `}

    svg {
        font-size: 2.5rem;

        &:hover {
            color: var(--main-red);
        }
    }
`;

export const CardImage = styled.img`
    width: 100%;
    margin-bottom: var(--spacing-s);
`;

export const CardTitle = styled.p`
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
`;

export const CardPricing = styled.section`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;

export const CardPrice = styled.p`
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const CardCountdown = styled.p`
    font-weight: bold;
    margin: 0;
    font-size: 1.5rem;
`;
