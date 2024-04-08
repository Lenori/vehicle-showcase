import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: var(--spacing-l);

    a {
        color: var(--dark-grey);
        text-transform: uppercase;
        font-weight: bold;
        margin-right: var(--spacing-m);
        font-size: 1.5rem;

        &:hover {
            text-decoration: underline;
        }
    }
`;
