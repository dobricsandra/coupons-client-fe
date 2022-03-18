import { BsTruck, BsGift } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import CouponAddStyled from "./CouponAdd.style";
import Stepper from "../../common/stepper/Stepper";
import Coupon from "../overview/Coupon";

import CouponForm from "../form/CouponForm";
import { useCouponAdd } from "../../../hooks/coupons/useCouponMutation";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function CouponAdd() {
    const navigate = useNavigate();

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
                            <AiOutlinePercentage className="icon" />
                            <p>Voucher</p>
                        </button>
                        <button onClick={() => setStep(2)}>
                            <BsTruck className="icon" />
                            <p>Free delivery</p>
                        </button>
                        <button onClick={() => setStep(2)}>
                            <BsGift className="icon" />
                            <p>Free gift</p>
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
