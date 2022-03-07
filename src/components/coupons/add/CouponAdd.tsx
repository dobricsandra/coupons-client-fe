import CouponAddStyled from "./CouponAdd.style";
import Loader from "../../common/loader/Loader";
import styled from "styled-components";
import Stepper from "../../common/stepper/Stepper";
import Coupon from "../overview/Coupon";

import CouponForm from "../form/CouponForm";

import { useState } from "react";
import * as yup from "yup";

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
    const [typeId, setTypeId] = useState(1);
    return (
        <CouponAddStyled>
            <Stepper setStep={setStep}>
                <form>
                    {step === 1 && (
                        <div className="first-stepper-page">
                            <button onClick={() => setStep(2)}>Voucher</button>
                            <button onClick={() => setStep(2)}>
                                Free gift
                            </button>
                            <button onClick={() => setStep(2)}>
                                Free delivery
                            </button>
                        </div>
                    )}
                    {step === 2 && <CouponForm typeId={typeId}></CouponForm>}
                    {step === 3 && (
                        <Coupon
                            couponData={{
                                id: 11,
                                amount: 30,
                                description: "Test coupon 3 for Lijepa.hr.",
                                validFrom: "2022-03-03T10:40:09.496Z",
                                validTo: "2022-03-03T10:40:09.497Z",
                                code: "CMSKFHK45464",
                                likes: 88,
                                dislikes: 22,
                                popularity: 66,
                                webshop: {
                                    id: 4,
                                    name: "Lijepa.hr",
                                    url: "https://www.lijepa.hr/",
                                },
                                unit: {
                                    id: 2,
                                    name: "kn",
                                },
                                type: {
                                    id: 1,
                                    type: "euro",
                                },
                            }}
                        >
                            Opala
                        </Coupon>
                    )}
                </form>
            </Stepper>
        </CouponAddStyled>
    );
}
