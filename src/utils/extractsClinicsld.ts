import { AppointmentSlot } from "../zoomcare-api";

export const extractClinicIds = (appointments: AppointmentSlot[]): number[] => {
    const clinicsIds: number[] = [];
    appointments.forEach(item => {
        if (!clinicsIds.includes(item.clinicId)) {
            clinicsIds.push(item.clinicId);
        }
    });

    return clinicsIds;
}