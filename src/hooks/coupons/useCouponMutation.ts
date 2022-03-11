import { useMutation } from "react-query";

import axios from "../../services/axiosClient";
import API_ENDPOINTS from "../../services/endpoints";

const addCoupon = async (couponData: any) => {
    const { data } = await axios.post(
        API_ENDPOINTS.coupons.createCouponEndpoint,
        couponData
    );

    return data;
};

const upvoteCoupon = async (id: Number) => {
    const { data } = await axios.post(
        API_ENDPOINTS.coupons.upvoteCouponEndpoint(id)
    );

    return data;
};

const downvoteCoupon = async (id: Number) => {
    const { data } = await axios.post(
        API_ENDPOINTS.coupons.downvoteCouponEndpoint(id)
    );

    return data;
};

export const useCouponAdd = () =>
    useMutation((couponData: any) => addCoupon(couponData));

export const useCouponUpvote = () =>
    useMutation((id: Number) => upvoteCoupon(id));

export const useCouponDownvote = () =>
    useMutation((id: Number) => downvoteCoupon(id));
