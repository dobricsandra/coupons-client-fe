import styled from "styled-components";

const GroupOverviewStyled = styled.div`
    max-width: 1765px;
    @media (max-width: 1850px) {
        max-width: 1410px;
    }
    @media (max-width: 1500px) {
        max-width: 1060px;
    }
    @media (max-width: 1100px) {
        max-width: 705px;
    }
    @media (max-width: 710px) {
        max-width: unset;
        text-align: center;
    }
    margin: 2% auto;
    > div {
        display: inline-block;
        width: 320px;
    }
`;

export default GroupOverviewStyled;
