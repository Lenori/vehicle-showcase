import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 32rem;
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
