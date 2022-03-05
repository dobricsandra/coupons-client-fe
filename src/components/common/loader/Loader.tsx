import styled from "styled-components";

const Loader = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    :after {
        content: " ";
        display: block;
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
export default Loader;
