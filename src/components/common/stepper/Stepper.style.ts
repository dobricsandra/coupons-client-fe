import styled from "styled-components";

const StepperHeaderLayout = styled.div`
    .stepper-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: white;
        font-size: 2rem;
        > div {
            display: flex;
            border-top: 5px solid lightgrey;
            flex-direction: column;
            align-items: flex-start;
            width: 30%;
            & span {
                color: red;
                font-size: 0.7rem;
                text-transform: uppercase;
                font-family: sans-serif;
                padding-top: 1rem;
                font-weight: 600;
            }
            & p {
                color: white;
                font-size: 0.95rem;
                margin: 0rem;
                padding: 0rem;
                padding-top: 0.2rem;
            }
        }
    }
`;

export default StepperHeaderLayout;
