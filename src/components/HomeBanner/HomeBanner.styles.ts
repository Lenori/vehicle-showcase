import styled from 'styled-components';

import HomeBannerImage from 'images/home-banner-image.jpg';

export const MainContainer = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 60rem;
    padding: var(--spacing-m);

    background-image: url(${HomeBannerImage});
    background-position: center -15rem;
    background-size: cover;
`;

export const BannerTitle = styled.h1`
    color: var(--white);
    text-transform: uppercase;
    font-size: 10rem;
    width: 45rem;
    text-align: end;
    margin-right: var(--spacing-l);
`;
