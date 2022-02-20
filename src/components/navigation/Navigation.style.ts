import styled from "styled-components";

const NavigationStyled = styled.div`
    height: 8rem;

    .upper-header {
        background-color: var(--color-black);
        padding: 2% 10%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        input {
            all: unset;
            border-bottom: 1px solid white;
            width: 15rem;
            cursor: input;
            color: white;
        }
        input::placeholder {
            color: white;
        }
    }
    .lower-header {
        padding: 0% 10%;
        background-color: var(--color-red);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        ul {
            padding: 0px;
            display: flex;
            flex-wrap: wrap;
        }

        li {
            color: white;
            padding-right: 2rem;
            display: inline;
        }
        .border {
            height: 30px;
            border-left: 1px solid white;
            padding-right: 3rem;
        }
    }

    @media (max-width: 768px) {
        .lower-header .border {
            display: none;
        }
    }
`;

export default NavigationStyled;
