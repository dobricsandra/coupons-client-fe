import Rating from "../../common/rating/Rating";
import {
    CouponContainer,
    CouponHeader,
    CouponLogo,
    CouponBody,
    Text,
    CouponCode,
    CouponAdditionalInfo,
} from "./Coupon.style";
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

export default function Coupon(props: any) {
    console.log("Coupon rerendered");
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

    // const [isCouponRated, setIsCouponRated] = useState();
    // const ratedCouponsFromLocalStorage =
    //     JSON.parse(getLocalStorageItem("ratedCoupons")!) || {};

    // useEffect(() => {
    //     if (ratedCouponsFromLocalStorage[couponData.id]) {
    //         setIsCouponRated(ratedCouponsFromLocalStorage[couponData.id]);
    //     }
    // }, [couponData.id, ratedCouponsFromLocalStorage]);

    // const { mutate: upvoteCoupon, isLoading: isUpvoteLoading } =
    //     useCouponUpvote();
    // const { mutate: downvoteCoupon, isLoading: isDownvoteLoading } =
    //     useCouponDownvote();

    // const upvoteHandler = () => {
    //     upvoteCoupon(couponData.id, {
    //         onSuccess: (data) => {
    //             setCouponData({ ...couponData, popularity: data });
    //             const ratedCouponsFromLocalStorage =
    //                 JSON.parse(getLocalStorageItem("ratedCoupons")!) ?? {};
    //             ratedCouponsFromLocalStorage[couponData.id] = "up";

    //             setLocalStorageItem({
    //                 key: "ratedCoupons",
    //                 value: JSON.stringify(ratedCouponsFromLocalStorage!),
    //             });
    //         },
    //         onError: (err: any) => {
    //             console.log(err);
    //         },
    //     });
    // };

    // const downvoteHandler = () => {
    //     downvoteCoupon(couponData.id, {
    //         onSuccess: (data) => {
    //             setCouponData({ ...couponData, popularity: data });
    //             const ratedCouponsFromLocalStorage =
    //                 JSON.parse(getLocalStorageItem("ratedCoupons")!) ?? {};
    //             ratedCouponsFromLocalStorage[couponData.id] = "down";

    //             setLocalStorageItem({
    //                 key: "ratedCoupons",
    //                 value: JSON.stringify(ratedCouponsFromLocalStorage!),
    //             });
    //         },
    //         onError: (err: any) => {},
    //     });
    // };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(couponData.code);
    };

    return (
        <CouponContainer>
            <CouponHeader>
                <CouponLogo>{couponData.webshop?.name}</CouponLogo>
                <Text fontSize="1.5rem">
                    {couponData.amount}
                    {couponData.unit?.name}
                </Text>
            </CouponHeader>
            <CouponBody>
                <CouponCode>
                    {couponData.code}
                    <img
                        src="/images/copy_icon.png"
                        alt="copy"
                        title="Copy"
                        onClick={copyToClipboard}
                        style={{ width: "30px", marginLeft: "1rem" }}
                    />
                </CouponCode>
                <CouponAdditionalInfo>
                    {couponData.validFrom && (
                        <p style={{ margin: "5px 0px" }}>
                            *Kupon vrijedi od {couponData.validFrom} do{" "}
                            {couponData.validTo}
                        </p>
                    )}
                    {couponData.description && (
                        <p style={{ margin: "5px 0px" }}>
                            *{couponData.description}
                        </p>
                    )}
                    {/* {!couponData.description && (
                        // <p style={{ margin: "5px 0px" }}>*Nema napomena</p>
                    )} */}
                </CouponAdditionalInfo>
            </CouponBody>

            <div
                className="coupon-footer"
                style={{
                    height: "15%",
                }}
            >
                {/* <Rating
                        upvoteHandler={upvoteHandler}
                        downvoteHandler={downvoteHandler}
                        isLoading={isUpvoteLoading || isDownvoteLoading}
                        isRated={isCouponRated}
                        rating={couponData.popularity}
                    >
                        {couponData.popularity}
                    </Rating> */}
            </div>
        </CouponContainer>
        // <Card>
        //     <CouponHeader>
        //         <LogoWrapper
        //             onClick={() =>
        //                 (window.location.href = couponData.webshop?.url)
        //             }
        //         >
        //             {webshopLogo()}
        //         </LogoWrapper>
        //         <div>
        //             {couponData.amount}
        //             {couponData.unit?.name}
        //         </div>
        //     </CouponHeader>
        //     <div className="coupon-code">
        //         {couponData.code}
        //         <img
        //             src="/images/copy_icon.png"
        //             alt="copy"
        //             title="Copy"
        //             onClick={copyToClipboard}
        //         />
        //     </div>

        //     {couponData.validFrom && (
        //         <p>
        //             *Kupon vrijedi od {couponData.validFrom} do{" "}
        //             {couponData.validTo}
        //         </p>
        //     )}
        //     {couponData.description && <p>*{couponData.description}</p>}
        //     {!couponData.description && <p>*Nema napomena</p>}

        //     <Rating
        //         upvoteHandler={upvoteHandler}
        //         downvoteHandler={downvoteHandler}
        //         isLoading={isUpvoteLoading || isDownvoteLoading}
        //         isRated={isCouponRated}
        //         rating={couponData.popularity}
        //     >
        //         {couponData.popularity}
        //     </Rating>
        // </Card>
    );
}
