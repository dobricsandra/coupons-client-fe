import styled from "styled-components";

export const NavigationStyled = styled.div`
    font-size: 16px;
    .upper-header {
        background-color: var(--color-black);
        padding: 1rem 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 750px) {
            padding: 1rem 1rem;
        }
        > div {
            flex-basis: auto;
            width: 70%;
            flex-shrink: 1;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        input {
            all: unset;
            border-bottom: 2px solid var(--color-white);
            width: 50%;
            cursor: input;
            color: white;

            @media (max-width: 940px) {
                width: 60%;
            }
        }
        input::placeholder {
            color: var(--color-white);
            font-style: italic;
        }
        button {
            all: unset;
            padding: 1% 3%;
            background-color: var(--color-red);
            color: var(--color-yellow-light);
            display: flex;
            align-items: center;
            cursor: pointer;
            flex-basis: min-content;
            flex-shrink: 0;
            @media (max-width: 500px) {
                span {
                    display: none;
                }
            }
        }
        button:hover {
            filter: brightness(1.5);
        }
    }
    .lower-header {
        padding: 0rem 3%;
        background-color: var(--color-red);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.5rem;
        @media (max-width: 950px) {
            gap: 0.8rem;
        }
        @media (max-width: 600px) {
            gap: 0.2rem;
            justify-content: center;
        }
        color: var(--color-yellow-light);
        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            padding-inline-start: 0px;
            padding-inline-end: 0px;
            @media (max-width: 950px) {
                gap: 0.8rem;
            }
            @media (max-width: 600px) {
                margin: 0.5rem;
            }
        }

        li {
            color: white;

            display: inline;
            @media (max-width: 950px) {
                font-size: 15px;
            }
        }
        .border {
            height: 20px;
            border-left: 2px solid var(--color-yellow-light);
        }
    }

    @media (max-width: 610px) {
        .lower-header {
            .border {
                display: none;
            }
        }
    }
`;

export const MobileNavigationStyled = styled.div``;
