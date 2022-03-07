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
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 5% 0px;
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
        input {
            all: unset;
            width: 100%;
            color: white;
            border-bottom: 2px solid var(--color-gray);
            margin: 10px 0px;
        }
        button:hover {
            background-color: green; //pink or plum
        }
    }
`;

export default CouponAddStyled;
