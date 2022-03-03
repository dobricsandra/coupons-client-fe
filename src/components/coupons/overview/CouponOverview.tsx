import { useQuery } from "react-query";
import axios from "../../../services/axiosClient";
import Coupon from "./Coupon";
import CouponsOverviewStyled from "./CouponOverview.style";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export default function CouponsOverview() {
    const location = useLocation();
  
    const [queryString, setQueryString] = useState(new URLSearchParams(location.search).toString());

    useEffect(()=>{
        setQueryString(new URLSearchParams(location.search).toString())
    }, [location]);

    const getCoupons = async () => {
        const { data } = await axios.get("vouchers?" + queryString.toString());
        return data;
    };

    const useCouponsFetch = () => useQuery(["getCoupons", queryString], getCoupons);

    
    const { data: coupons, isLoading, isError } = useCouponsFetch();

    const hasCoupons = coupons && coupons.length > 0;

    if (isError) {
        return (
            <div
                style={{
                    maxWidth: "500px",
                    width: "100%",
                    textAlign: "center",
                    margin: "auto",
                    fontSize: "20px",
                    color: "red",
                }}
            >
                <p>Invalid error...</p>
                <img
                    src="/images/invalid_error.jpeg"
                    alt="invalid error"
                    width="100%"
                />
            </div>
        );
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!hasCoupons) {
        return <div>No coupons...</div>;
    }

    return (
        <CouponsOverviewStyled>
            {coupons.map((coupon: any) => (
                <Coupon couponData={coupon} key={coupon.id} />
            ))}
        </CouponsOverviewStyled>
    );
}
