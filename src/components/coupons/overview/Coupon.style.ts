import styled from "styled-components";

export const Card = styled.div`
    background-color: white;
    color: black;
    padding: 1rem;
    margin: 1rem;
    max-height: 300px;
    max-width: 20rem;
    width: 100%;
    text-align: left;
    box-shadow: 7px 7px rgba(0, 0, 0, 0.5);
    & .coupon-code {
        padding: 2.5rem;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        line-height: 2rem;
        img {
            max-height: 2rem;
            cursor: copy;
        }
    }

    & p {
        margin: 0.3rem;
        font-size: 12px;
        font-weight: 500;
    }
`;

export const CouponHeader = styled.div`
    display: flex;
    height: 3.5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 2px solid rgba(229, 231, 235);
`;

export const LogoWrapper = styled.div`
    & .name-logo {
        background-color: black;
        color: white;
        font-weight: 700;
        padding: 0.8rem;
    }
    & img {
        max-height: 3.4rem;
    }
`;
