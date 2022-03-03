import { useMutation } from "react-query";

import axios from "../../services/axiosClient";
import API_ENDPOINTS from "../../services/endpoints";

const addCoupon = async (couponData: any) => {
    const { data } = await axios.post(
        API_ENDPOINTS.coupons.getCouponEndpoint,
        couponData
    );

    return data;
};

const upvoteCoupon = async (couponData: any) => {
    const { data } = await axios.post(
        API_ENDPOINTS.coupons.getCouponEndpoint,
        couponData
    );

    return data;
};

const downvoteCoupon = async (couponData: any) => {
    const { data } = await axios.post(
        API_ENDPOINTS.coupons.getCouponEndpoint,
        couponData
    );

    return data;
};

export const useCouponAdd = () =>
    useMutation((couponData) => addCoupon(couponData));

export const useCouponUpvote = () => useMutation(upvoteCoupon);

export const useCouponDownvote = () => useMutation(downvoteCoupon);
