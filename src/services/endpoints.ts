const API_ENDPOINTS = {
    coupons: {
        getCouponEndpoint: "/vouchers",
        getCouponByIdEndpoint: (id: Number) => `/vouchers/${id}`,
        createCouponEndpoint: "/vouchers",
        upvoteCouponEndpoint: (id: Number) => `/vouchers/like/${id}`,
        downvoteCouponEndpoint: (id: Number) => `/vouchers/dislike/${id}`,
    },
    webshops: {
        getWebshopsEndpoint: "/webshops",
    },
    units: {
        getUnitsEndpoint: "/units",
    },
};

export default API_ENDPOINTS;
