import styled from "styled-components";

export const NavigationStyled = styled.div`
    font-size: 16px;
    .upper-header {
        background-color: var(--color-black);
        padding: 1.5rem 6rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        input {
            all: unset;
            margin-left: 1rem;
            border-bottom: 2px solid var(--color-white);
            width: 25rem;
            cursor: input;
            color: white;
        }
        input::placeholder {
            color: var(--color-white);
            font-style: italic;
        }
    }
    .lower-header {
        padding: 0rem 1rem;
        background-color: var(--color-red);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        color: var(--color-yellow-light);
        ul {
            display: flex;
            flex-wrap: wrap;
        }

        li {
            color: white;
            padding-right: 2rem;
            display: inline;
        }
        .border {
            height: 20px;
            border-left: 2px solid var(--color-yellow-light);
        }
    }

    @media (max-width: 750px) {
        font-size: 15px;
    }

    @media (min-width: 450px) and (max-width: 749px) {
        .lower-header {
            .border {
                display: none;
            }
            ul {
                display: flex;
                width: 100%;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }
    }
`;

export const MobileNavigationStyled = styled.div``;
