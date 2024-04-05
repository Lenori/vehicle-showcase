import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: -3rem 0 var(--spacing-m);
    border-radius: 5rem;
    width: 100rem;
    background-color: var(--white);
    padding: var(--spacing-m) var(--spacing-l);
    box-shadow: 0px 4px 7px 0px var(--shadow);
`;

export const FilterContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: var(--spacing-m);

    p {
        text-transform: uppercase;
        margin: 0 0 var(--spacing-s);
        font-weight: bold;
        font-size: 1.2rem;
    }
`;
