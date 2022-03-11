import { useQuery } from "react-query";

import axios from "../../services/axiosClient";
import API_ENDPOINTS from "../../services/endpoints";

const getWebshops = async () => {
    const { data } = await axios.get(
        API_ENDPOINTS.webshops.getWebshopsEndpoint
    );
    return data;
};

export const useWebshops = () => {
    return useQuery("webshops", getWebshops);
};
