import styled from "styled-components";

interface Props {
    rating: any;
    isLoading: boolean;
}

const getRatingColor = (props: any) => {
    if (props.isLoading) {
        return "lightgray";
    }
    if (props.rating >= 0) {
        return "lightgreen";
    }
    if (props.rating < 0) {
        return "red";
    }
};
const RatingStyled = styled.div<Props>`
    border-top: 2px solid rgba(229, 231, 235);
    padding-top: 0.7rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 1.5rem;
        pointer-events: ${(props) => {
            if (props.isLoading) return "none";
        }};
    }

    .popularity {
        padding: 0.5rem 1rem;
        background-color: ${(props) => getRatingColor(props)};
    }
    > img:hover {
        cursor: ${(props) => {
            if (!props.isLoading) return "pointer";
        }};
    }
`;

export default RatingStyled;
