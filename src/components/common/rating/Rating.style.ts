import styled from "styled-components";

const RatingStyled = styled.div`
    border-top: 2px solid rgba(229, 231, 235);
    padding-top: 0.7rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 1.5rem;
    }

    span {
        padding: 0.5rem 1rem;
        background-color: lightgrey;
    }
    > img:hover {
        cursor: pointer;
    }
`;

export default RatingStyled;
