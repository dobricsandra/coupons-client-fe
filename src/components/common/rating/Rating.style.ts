import styled from "styled-components";

interface Props {
    rating: any;
    isLoading: boolean;
    isRated: string;
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
    svg {
        pointer-events: ${(props) => {
            if (props.isLoading || props.isRated) return "none";
        }};
    }
    .thumb-up {
        color: ${(props) => {
            if (props.isRated === "up") return "green";
        }};
    }
    .thumb-down {
        color: ${(props) => {
            if (props.isRated === "down") return "red";
        }};
    }
    .popularity {
        padding: 0.5rem 1rem;
        background-color: ${(props) => getRatingColor(props)};
    }
    > svg:hover {
        cursor: ${(props) => {
            if (!props.isLoading && !props.isRated) return "pointer";
        }};
    }
`;

export default RatingStyled;
