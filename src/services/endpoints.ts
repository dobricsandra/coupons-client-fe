const API_ENDPOINTS = {
    coupons: {
        getCouponEndpoint: "/vouchers",
        getCouponByIdEndpoint: (id: Number) => `/vouchers/${id}`,
        upvoteCouponEndpoint: (id: Number) => `/vouchers/like/${id}`,
        downvoteCouponEndpoint: (id: Number) => `/vouchers/dislike/${id}`,
    },
    webshops: {
        getWebshopsEndpoint: "/webshops",
    },
};

export default API_ENDPOINTS;
