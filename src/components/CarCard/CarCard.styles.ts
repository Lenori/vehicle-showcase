import styled, { css } from 'styled-components';

export const MainContainer = styled.section<{ $wide: boolean }>`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 32rem;
    position: relative;

    ${(props) =>
        props.$wide &&
        css`
            max-width: none;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: var(--spacing-m);
            cursor: pointer;
            border-bottom: 0.2rem solid var(--white);

            &:hover {
                border-bottom: 0.2rem solid var(--lighter-grey);
            }

            ${CardTitle} {
                width: 45%;
            }

            ${CardImage} {
                max-height: 10rem;
                width: unset;
            }

            ${CardFooter} {
                width: 40%;
                flex-direction: column;
                align-items: flex-end;
            }

            ${CardPrice} {
                margin-bottom: var(--spacing-s);
            }
        `}
`;

export const FavouriteBadge = styled.section<{ $favourite: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    color: var(--light-grey);

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

export const CardFooter = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
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
