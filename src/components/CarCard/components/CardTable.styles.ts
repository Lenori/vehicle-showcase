import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: var(--spacing-s) 0 var(--spacing-m);
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
