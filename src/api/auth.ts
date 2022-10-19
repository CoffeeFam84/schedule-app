import axios from "axios";
import { LOGIN_API } from "../utils/constants";
import { LoginResponse } from "../zoomcare-api";

export const userLogin = async (username: string, password: string): Promise<LoginResponse> => {
    return axios.post<LoginResponse>(LOGIN_API, { username: username, password: password })
        .then(result => result.data)
        .catch(error => error.response.data);
};