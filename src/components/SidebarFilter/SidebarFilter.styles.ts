import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50rem;
    margin-right: var(--spacing-m);
`;

export const FilterContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: var(--spacing-m);
`;

export const FilterTitle = styled.p`
    text-transform: uppercase;
    margin: 0 0 var(--spacing-s);
    font-weight: bold;
    font-size: 1.2rem;
`;

export const ClearFilters = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
`;
