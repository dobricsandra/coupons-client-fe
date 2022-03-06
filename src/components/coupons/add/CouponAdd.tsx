import CouponAddStyled from "./CouponAdd.style";
import InfoBox from "../../common/info-box/InfoBox";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCouponsFetch } from "../../../hooks/coupons/useCoupon";
import Loader from "../../common/loader/Loader";
import styled from "styled-components";
export default function CouponAdd() {
    // const { data: coupons, isLoading, isError } = useCouponsFetch(x);

    // const hasCoupons = coupons && coupons.length > 0;

    // if (isError) {
    //     return (
    //         <div
    //             style={{
    //                 maxWidth: "500px",
    //                 width: "100%",
    //                 textAlign: "center",
    //                 margin: "auto",
    //                 fontSize: "20px",
    //                 color: "red",
    //             }}
    //         >
    //             <p>Invalid error...</p>
    //             <img
    //                 src="/images/invalid_error.jpeg"
    //                 alt="invalid error"
    //                 width="100%"
    //             />
    //         </div>
    //     );
    // }
    // if (isLoading) {
    //     return <Loader />;
    // }

    // if (!hasCoupons) {
    //     return <InfoBox>No coupons found!</InfoBox>;
    // }
    const [step, setStep] = useState(1);
    return (
        <CouponAddStyled>
            <StepperHeaderLayout>
                <StepperHeaderSectionLayout isFilled={step >= 1}>
                    <span>step 1</span>
                    {step !== 1 && <p>Choose type</p>}
                </StepperHeaderSectionLayout>
                <StepperHeaderSectionLayout isFilled={step >= 2}>
                    <span>step 2</span>
                    <p>Fill info</p>
                </StepperHeaderSectionLayout>
                <StepperHeaderSectionLayout isFilled={step >= 3}>
                    <span>step 3</span>
                    <p>Confirm</p>
                </StepperHeaderSectionLayout>
            </StepperHeaderLayout>
            <StepperHeaderTitle>
                {step === 1 && "Choose Voucher Type"}
            </StepperHeaderTitle>
            <form>
                {step === 1 && (
                    <StepperSection>
                        <button>Voucher</button>
                        <button>Free gift</button>
                        <button>Free delivery</button>
                    </StepperSection>
                )}
                {/* {step === 2 && (
                        <CouponFormSecondSection setStep={setStep} />
                    )}
                    {step === 3 && <CouponFormThirdSection setStep={setStep} />} */}
            </form>
        </CouponAddStyled>
    );
}

const StepperSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const StepperHeaderLayout = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: white;
    font-size: 2rem;
`;
const StepperHeaderTitle = styled.div`
    border-bottom: 1px solid white;
    padding-top: 60px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: left;
    color: white;
    font-weight: 700;
`;

interface Props {
    isFilled: boolean;
}
const StepperHeaderSectionLayout = styled.div<Props>`
    display: flex;
    border-top: 5px solid ${(props) => (props.isFilled ? "red" : "lightgrey")};
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    & span {
        color: ${(props) => (props.isFilled ? "red" : "white")};
        font-size: 0.7rem;
        text-transform: uppercase;
        font-family: sans-serif;
        padding-top: 1rem;
        font-weight: 600;
    }
    & p {
        color: ${(props) => (props.isFilled ? "red" : "white")};
        font-size: 0.95rem;
        margin: 0rem;
        padding: 0rem;
        padding-top: 0.2rem;
    }
`;
