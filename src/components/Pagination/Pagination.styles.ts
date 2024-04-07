import styled, { css } from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: var(--spacing-m) 0;
`;

export const Page = styled.p<{ $selected: boolean }>`
    font-size: 1.5rem;
    margin: 0 var(--spacing-s);
    padding: var(--spacing-s);
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    ${(props) =>
        props.$selected &&
        css`
            font-weight: bold;
        `}
`;
