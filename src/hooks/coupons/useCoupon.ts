import { useQuery } from "react-query";
import { ICoupon } from "../../models/coupons/types";

import axios from "../../services/axiosClient";
import API_ENDPOINTS from "../../services/endpoints";

const getCoupons = async (queryString: any) => {
    console.log("getting coupons");
    const { data } = await axios.get(
        `${API_ENDPOINTS.coupons.getCouponEndpoint}?${queryString}`
    );

    return data;
};

const getCouponById = async (id: Number) => {
    const { data } = await axios.get(
        API_ENDPOINTS.coupons.getCouponByIdEndpoint(id)
    );

    return data;
};

export const useCouponsFetch = (queryString: any) => {
    return useQuery<Array<ICoupon>, Error>(["getCoupons", queryString], () =>
        getCoupons(queryString)
    );
};

export const useCouponByIdFetch = (id: Number) => {
    return useQuery<ICoupon>(["getCouponById", id], () => getCouponById(id));
};
