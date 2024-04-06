import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

export const MainInput = styled.input`
    border: 0.1rem solid var(--light-grey);
    padding: 0 var(--spacing-s);
    border-radius: 0.8rem;
    width: 18rem;
    height: 3.5rem;
`;

export const OptionsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--white);
    position: absolute;
    top: 3.5rem;
    border: 0.1rem solid var(--light-grey);
    border-radius: 0.8rem;
    width: 100%;
`;

export const Option = styled.p`
    margin: 0;
    font-size: 1.2rem;
    padding: var(--spacing-xs) var(--spacing-s);
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        background-color: var(--lighter-grey);
    }
`;
