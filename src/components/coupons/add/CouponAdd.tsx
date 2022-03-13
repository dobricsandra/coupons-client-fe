import CouponAddStyled from "./CouponAdd.style";
import Loader from "../../common/loader/Loader";
import styled from "styled-components";
import Stepper from "../../common/stepper/Stepper";
import Coupon from "../overview/Coupon";

import CouponForm from "../form/CouponForm";
import { useCouponAdd } from "../../../hooks/coupons/useCouponMutation";
import { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router";

export default function CouponAdd() {
    const navigate = useNavigate();
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
    const [newCouponData, setNewCouponData] = useState({});
    const { mutate: addCoupon } = useCouponAdd();
    const confirmCouponHandler = () => {
        addCoupon(newCouponData, {
            onSuccess: (data) => {
                console.log(data);
                navigate("/");
            },
            onError: (data) => {
                console.log(data);
            },
        });
    };
    return (
        <CouponAddStyled>
            <Stepper setStep={setStep} step={step}>
                {step === 1 && (
                    <div className="first-stepper-page">
                        <button
                            onClick={() => {
                                setStep(2);
                                setTypeId(1);
                            }}
                        >
                            Voucher
                        </button>
                        <button onClick={() => setStep(2)}>Free gift</button>
                        <button onClick={() => setStep(2)}>
                            Free delivery
                        </button>
                    </div>
                )}
                {step === 2 && (
                    <CouponForm
                        typeId={typeId}
                        setNewCouponData={setNewCouponData}
                        setStep={setStep}
                    ></CouponForm>
                )}
                {step === 3 && (
                    <div className="coupon-container">
                        <Coupon couponData={newCouponData}></Coupon>
                        <button onClick={confirmCouponHandler}>Confirm</button>
                    </div>
                )}
            </Stepper>
        </CouponAddStyled>
    );
}
