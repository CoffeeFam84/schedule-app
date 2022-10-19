import axios from "axios";
import { APPOINTMENTS_API } from "../utils/constants";
import { AppointmentsDto } from "../zoomcare-api";

export const getAppointments = async (authToken: string): Promise<AppointmentsDto> => {
    return axios.get<AppointmentsDto>(APPOINTMENTS_API, { headers: { "Authorization": authToken } })
        .then(result => result.data)
        .catch(error => error.response.data);
};