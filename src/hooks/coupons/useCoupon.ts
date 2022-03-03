import { useQuery } from "react-query";

import axios from "../../services/axiosClient";
import API_ENDPOINTS from "../../services/endpoints";

const getCoupons = async (queryString: any) => {
    const { data } = await axios.get(
        `${API_ENDPOINTS.coupons.getCouponEndpoint}?${queryString}`
    );

    return data;
};

const useCouponsFetch = (queryString: any) => {
    return useQuery(["getCoupons", queryString], () => getCoupons(queryString));
};

export default useCouponsFetch;
