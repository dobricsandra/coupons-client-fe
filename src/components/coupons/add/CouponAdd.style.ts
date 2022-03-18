import styled from "styled-components";

const CouponAddStyled = styled.div`
    background-color: var(--color-black);
    margin: 5% 20%;
    @media (max-width: 1240px) {
        margin: 5% 10%;
    }
    @media (max-width: 800px) {
        margin: 5% 5%;
    }
    padding: 5%;
    .first-stepper-page {
        display: flex;
        justify-content: space-evenly;
        button {
            margin-top: 5%;
            width: 25%;
            @media (max-width: 600px) {
                width: 30%;
            }
            padding: 2%;
        }
        button:hover {
            outline: none;
            border: none;
            cursor: pointer;
            background-color: mediumseagreen;
        }
        .icon {
            font-size: 6rem;
            @media (max-width: 1500px) {
                font-size: 5rem;
            }
            @media (max-width: 1240px) {
                font-size: 4rem;
            }
            @media (max-width: 600px) {
                font-size: 3rem;
            }
        }
        p {
            font-size: 1.2rem;
            @media (max-width: 1240px) {
                font-size: 1rem;
            }
            @media (max-width: 600px) {
                font-size: 0.7rem;
            }
            font-weight: 500;
            margin-bottom: 0px;
        }
    }

    .coupon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
            margin: auto;
        }
        button {
            border: none;
            width: 45%;
            margin: auto;
            padding: 2%;
            margin-top: 4%;
            font-size: 1.3rem;
            font-weight: 500;
            text-transform: uppercase;
            background-color: mediumseagreen; //pink or plum
            cursor: pointer;
            @media (max-width: 750px) {
                width: 100%;
                padding: 4%;
                font-size: 1rem;
            }
        }
    }
`;

export default CouponAddStyled;
