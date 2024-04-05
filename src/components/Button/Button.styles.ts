import styled from 'styled-components';

export const MainContainer = styled.button`
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-m);
    height: 3.5rem;
    border-radius: 0.8rem;
    border: none;
    background-color: var(--main-yellow);
    color: var(--dark-yellow);
    font-weight: bold;
    text-transform: uppercase;

    svg {
        margin-right: var(--spacing-s);
    }
`;
