import styled from "styled-components";

const CouponAddStyled = styled.div`
    background-color: var(--color-black);
    margin: 5%;
    padding: 5%;
    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        button {
            border: none;
            width: 60%;
            padding: 2%;
            font-size: 1.3rem;
            font-weight: 500;
            text-transform: uppercase;
            background-color: rosybrown; //pink or plum
            cursor: pointer;
            @media (max-width: 750px) {
                width: 100%;
                padding: 4%;
                font-size: 1rem;
            }
        }
        button:hover {
            background-color: pink; //pink or plum
        }
    }
`;

export default CouponAddStyled;
