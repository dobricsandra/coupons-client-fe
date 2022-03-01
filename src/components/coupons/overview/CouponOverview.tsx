import { useQuery } from "react-query";
import axios from "../../../services/axiosClient";

import Coupon from "./Coupon";
import CouponsOverviewStyled from "./CouponOverview.style";

export default function CouponsOverview() {
    const getCoupons = async () => {
        const { data } = await axios.get("vouchers");
        return data;
    };

    const useCouponsFetch = () => useQuery("serviceAccount", getCoupons);

    const { data: coupons, isLoading } = useCouponsFetch();
    const hasCoupons = coupons && coupons.length > 0;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!hasCoupons) {
        return <div>No coupons...</div>;
    }
    console.log(coupons);
    return (
        <CouponsOverviewStyled>
            {coupons.map((coupon: any) => (
                <Coupon couponData={coupon} key={coupon.id} />
            ))}
        </CouponsOverviewStyled>
    );
}
