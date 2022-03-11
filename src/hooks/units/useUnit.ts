import { useQuery } from "react-query";

import axios from "../../services/axiosClient";
import API_ENDPOINTS from "../../services/endpoints";

const getUnits = async () => {
    const { data } = await axios.get(API_ENDPOINTS.units.getUnitsEndpoint);

    return data;
};

export const useUnitsFetch = () => {
    return useQuery("getUnits", () => getUnits());
};
