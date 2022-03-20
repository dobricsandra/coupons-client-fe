import styled from "styled-components";

export const CouponContainer = styled.div`
    background-color: white;
    box-shadow: 7px 7px rgba(0, 0, 0, 0.5);
    height: 300px;
    width: 320px;
    color: black;
    margin: 1rem;
    padding: 1rem;
    &::after {
        content: "";
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const CouponHeader = styled.div`
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CouponLogo = styled.div`
    max-width: 70%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    max-height: 100%;
    background-color: black;
    font-weight: 500;
    color: white;
    padding: 0.8rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
`;

interface TextProps {
    fontSize: string;
}
export const Text = styled.div<TextProps>`
    font-size: ${(props) => props.fontSize};
`;

export const CouponBody = styled.div`
    height: 65%;
    border-top: 2px solid rgba(229, 231, 235);
    border-bottom: 2px solid rgba(229, 231, 235);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const CouponCode = styled.div`
    font-size: 1.5rem;
    padding: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CouponAdditionalInfo = styled.div`
    font-size: 12px;
    overflow-y: scroll;
`;
