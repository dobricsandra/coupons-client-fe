import Rating from "../../common/rating/Rating";
import { Card, CouponHeader, LogoWrapper } from "./Coupon.style";
import {
    useCouponDownvote,
    useCouponUpvote,
} from "../../../hooks/coupons/useCouponMutation";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "../../../services/localStorage";
import { useEffect, useState } from "react";
import { ICoupon } from "../../../models/coupons/types";
import { useNavigate } from "react-router-dom";

export default function Coupon(props: any) {
    const [couponData, setCouponData] = useState<ICoupon>({
        ...props.couponData,
        validFrom: new Date(props.couponData.validFrom)
            .toLocaleString("hr-HR")
            .replaceAll(" ", "")
            .slice(0, -8),
        validTo: new Date(props.couponData.validTo)
            .toLocaleString("hr-HR")
            .replaceAll(" ", "")
            .slice(0, -8),
    });

    const [isCouponRated, setIsCouponRated] = useState();
    const navigate = useNavigate();
    const ratedCouponsFromLocalStorage =
        JSON.parse(getLocalStorageItem("ratedCoupons")!) || {};

    useEffect(() => {
        if (ratedCouponsFromLocalStorage[couponData.id]) {
            setIsCouponRated(ratedCouponsFromLocalStorage[couponData.id]);
        }
    }, [couponData.id, ratedCouponsFromLocalStorage]);

    const { mutate: upvoteCoupon, isLoading: isUpvoteLoading } =
        useCouponUpvote();
    const { mutate: downvoteCoupon, isLoading: isDownvoteLoading } =
        useCouponDownvote();

    const upvoteHandler = () => {
        upvoteCoupon(couponData.id, {
            onSuccess: (data) => {
                setCouponData({ ...couponData, popularity: data });
                const ratedCouponsFromLocalStorage =
                    JSON.parse(getLocalStorageItem("ratedCoupons")!) ?? {};
                ratedCouponsFromLocalStorage[couponData.id] = "up";

                setLocalStorageItem({
                    key: "ratedCoupons",
                    value: JSON.stringify(ratedCouponsFromLocalStorage!),
                });
            },
            onError: (err: any) => {
                console.log(err);
            },
        });
    };

    const downvoteHandler = () => {
        downvoteCoupon(couponData.id, {
            onSuccess: (data) => {
                setCouponData({ ...couponData, popularity: data });
                const ratedCouponsFromLocalStorage =
                    JSON.parse(getLocalStorageItem("ratedCoupons")!) ?? {};
                ratedCouponsFromLocalStorage[couponData.id] = "down";

                setLocalStorageItem({
                    key: "ratedCoupons",
                    value: JSON.stringify(ratedCouponsFromLocalStorage!),
                });
            },
            onError: (err: any) => {},
        });
    };

    const webshopLogo = () => {
        if (couponData.webshop?.name === "Lijepa.hr") {
            return (
                <img
                    src="/images/webshop-logos/lijepa-hr_logo.png"
                    alt="lijepa.hr logo"
                />
            );
        }
        if (couponData.webshop?.name === "Notino") {
            return (
                <img
                    src="/images/webshop-logos/notino_logo.png"
                    alt="notino.hr logo"
                />
            );
        }
        return <span className="name-logo">{couponData.webshop?.name}</span>;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(couponData.code);
    };

    return (
        <Card>
            <CouponHeader>
                <LogoWrapper
                    onClick={() =>
                        (window.location.href = couponData.webshop?.url)
                    }
                >
                    {webshopLogo()}
                </LogoWrapper>
                <div>
                    {couponData.amount}
                    {couponData.unit?.name}
                </div>
            </CouponHeader>
            <div className="coupon-code">
                {couponData.code}
                <img
                    src="/images/copy_icon.png"
                    alt="copy"
                    title="Copy"
                    onClick={copyToClipboard}
                />
            </div>
            <p>
                * Kupon vrijedi od {couponData.validFrom} do{" "}
                {couponData.validTo}
            </p>
            <p>* {couponData.description}</p>
            <Rating
                upvoteHandler={upvoteHandler}
                downvoteHandler={downvoteHandler}
                isLoading={isUpvoteLoading || isDownvoteLoading}
                isRated={isCouponRated}
                rating={couponData.popularity}
            >
                {couponData.popularity}
            </Rating>
        </Card>
    );
}
