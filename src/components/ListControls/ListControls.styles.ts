import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: var(--spacing-m);
    z-index: 1000;
`;

export const PaginationControl = styled.section`
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        margin-right: var(--spacing-s);
    }

    select {
        width: 5rem;
        padding: var(--spacing-xxs);
    }
`;

export const OrderControl = styled.section`
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
        margin-right: var(--spacing-s);
    }

    select {
        width: 15rem;
        padding: var(--spacing-xxs);
    }
`;
