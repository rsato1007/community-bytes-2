import API from "./ApiService";

import { IPayload } from "../Types/ServicesTypes";

/**
 * Handles all API calls to backend when data is being updated, deleted, added, index, etc.
 * Currently has one, but primarily used as template.
 */
const DataAPI = {
    // Using as template
    async create(payload: IPayload) {
        return await API.post(`/api/${payload.name}`, payload.data);
    }
};