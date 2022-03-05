import Rating from "../../common/rating/Rating";
import { Card, CouponHeader, LogoWrapper } from "./Coupon.style";
import {
    useCouponDownvote,
    useCouponUpvote,
} from "../../../hooks/coupons/useCouponMutation";

export default function Coupon(props: any) {
    const couponData = props.couponData;
    const { mutate: upvoteCoupon, isLoading: isUpvoteLoading } =
        useCouponUpvote();
    const { mutate: downvoteCoupon, isLoading: isDownvoteLoading } =
        useCouponDownvote();

    const upvoteHandler = () => {
        upvoteCoupon(couponData.id, {
            onSuccess: (data) => {
                couponData.popularity = data;
            },
            onError: (err: any) => {},
        });
    };

    const downvoteHandler = () => {
        downvoteCoupon(couponData.id, {
            onSuccess: (data) => {
                couponData.popularity = data;
            },
            onError: (err: any) => {},
        });
    };

    const webshopLogo = () => {
        if (couponData.webshop.name === "Lijepa.hr") {
            return (
                <img
                    src="/images/webshop-logos/lijepa-hr_logo.png"
                    alt="lijepa.hr logo"
                />
            );
        }
        if (couponData.webshop.name === "Notino") {
            return (
                <img
                    src="/images/webshop-logos/notino_logo.png"
                    alt="notino.hr logo"
                />
            );
        }
        return <span className="name-logo">{couponData.webshop.name}</span>;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(couponData.couponCode);
    };

    return (
        <Card>
            <CouponHeader>
                <LogoWrapper>{webshopLogo()}</LogoWrapper>
                <div>
                    {couponData.amount}
                    {couponData.unit.name}
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
            <p>* Kupon vrijedi od 2020-01-01 do 2021-01-01</p>
            <p>* {couponData.description}</p>
            <Rating
                upvoteHandler={upvoteHandler}
                downvoteHandler={downvoteHandler}
                isLoading={isUpvoteLoading || isDownvoteLoading}
                rating={couponData.popularity}
            >
                {couponData.popularity}
            </Rating>
        </Card>
    );
}
