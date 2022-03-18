import styled from "styled-components";

export const CouponFormStyled = styled.div`
    display: flex;
    gap: 1rem;
    width: 70%;
    @media (max-width: 700px) {
        width: 100%;
    }
    padding: 4%;
    margin: auto;
    justify-content: space-around;
    background-color: var(--color-black);
    flex-wrap: wrap;
    form {
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
    button {
        border: none;
        width: 50%;
        padding: 2.5%;
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
    .form-group {
        width: 45%;
        @media (max-width: 500px) {
            width: 100%;
        }

        label {
            display: flex;
            flex-direction: column-reverse;
        }
        &.amount {
            display: flex;
            gap: 1em;
            > div:first-child {
                width: 70%;
                input {
                    text-align: right;
                    padding-right: 5px;
                }
            }
            > div:not(:first-child) {
                width: 25%;
            }
        }
        .unit {
            width: 30%;
        }
        label > span {
            transition: all 0.2s;
            transform-origin: top left;
            font-size: 13px;
            text-transform: uppercase;
            color: var(--color-gray);
        }
        label > input[placeholder=" "]:not(:focus):placeholder-shown + span {
            transform: translateY(1.5em) scale(1.25);
            pointer-events: none;
            opacity: 1;
        }

        input,
        select {
            all: unset;
            padding-bottom: 2px;
            margin-top: 5px;
            background-color: var(--color-black);
            border: none;
            border-bottom: 1.5px solid var(--color-gray);
            color: var(--color-white);

            width: 100%;
            color: white;
            margin: 10px 0px;
        }

        .error-label {
            font-size: 12px;
            color: var(--color-red);
            margin: 0px;
            padding: 0px;
            padding-top: 3px;
        }
    }
`;
export const FreeDeliveryFormStyled = styled.div``;
export const FreeGiftFormStyled = styled.div``;
