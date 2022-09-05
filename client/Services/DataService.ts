import API from "./ApiService";

import { IPayload } from "../Types/ServicesTypes";

const DataAPI = {
    // Using as template
    async create(payload: IPayload) {
        return await API.post(`/api/${payload.name}`, payload.data);
    }
};