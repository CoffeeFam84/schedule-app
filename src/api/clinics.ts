import axios from "axios";
import { CLINICS_API } from "../utils/constants";
import { Clinic } from "../zoomcare-api";

export const fetchClinicsListByIds = async (idsList: number[], authCode: string) => {
    const promises: Promise<Clinic>[] = [];
    for (const clinicId of idsList) {
        promises.push(
            axios.get<Clinic>(`${CLINICS_API}/${clinicId}`, { headers: { "Authorization": authCode } })
            .then(result => result.data)
            .catch(error => error.response.data)
        );
    }
    return Promise.all(promises);
};