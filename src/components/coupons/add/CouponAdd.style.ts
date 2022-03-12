import styled from "styled-components";

const CouponAddStyled = styled.div`
    background-color: var(--color-black);
    margin: 5%;
    padding: 5%;
    .first-stepper-page {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        button {
            border: none;
            width: 60%;
            padding: 2.5%;
            font-size: 1.3rem;
            font-weight: 500;
            text-transform: uppercase;
            background-color: pink; //pink or plum
            cursor: pointer;
            @media (max-width: 750px) {
                width: 100%;
                padding: 4%;
                font-size: 1rem;
            }
        }
    }

    .coupon-container {
        > div {
            margin: auto;
        }
    }
`;

export default CouponAddStyled;
