import styled from "styled-components";

export const CouponFormStyled = styled.div`
    display: flex;
    gap: 1rem;
    width: 70%;
    @media (max-width: 700px) {
        width: 100%;
    }
    padding: 5%;
    margin: auto;
    justify-content: space-between;
    background-color: var(--color-black);
    flex-wrap: wrap;
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
                width: 30%;
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
            border-bottom: 1.5px solid var(--color-gray);
            padding-bottom: 2px;
            margin-top: 5px;
        }

        .error-label {
            font-size: 12px;
            color: var(--color-red);
            margin: 0px;
            padding: 0px;
        }
    }
`;
export const FreeDeliveryFormStyled = styled.div``;
export const FreeGiftFormStyled = styled.div``;
