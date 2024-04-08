import styled, { css } from 'styled-components';

export const MainContainer = styled.section<{ $wide: boolean }>`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: var(--spacing-s) 0 var(--spacing-m);

    ${(props) =>
        props.$wide &&
        css`
            margin: 0 var(--spacing-s);
            flex-wrap: nowrap;
            justify-content: flex-start;
            width: 40%;

            ${InfoContainer} {
                justify-content: flex-start;
                flex-direction: column;

                &:first-of-type {
                    margin-bottom: 0;
                }
            }

            ${Info} {
                margin-right: var(--spacing-m);
                color: var(--dark-grey);

                &:first-of-type {
                    margin-bottom: var(--spacing-s);
                }
            }
        `}
`;

export const InfoContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    &:first-of-type {
        margin-bottom: var(--spacing-s);
    }
`;

export const Info = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--light-grey);

    svg {
        font-size: 1.5rem;
        margin-right: var(--spacing-xxs);
    }

    p {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0;
    }
`;
