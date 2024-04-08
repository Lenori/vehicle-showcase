import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    margin-top: var(--spacing-m);

    table {
        font-size: 1.2rem;

        th,
        td {
            text-align: left;
            padding: 0 var(--spacing-s) var(--spacing-s) 0;
            vertical-align: top;

            p {
                margin: 0 0 var(--spacing-s);
            }
        }
    }
`;

export const VerticalCell = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;
