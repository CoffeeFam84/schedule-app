import { AppointmentSlot, Clinic, ClinicAppointment } from "../zoomcare-api";
import { extractTimeslots } from "./timeLots";

export const parseClinicsAppointments = (clinics: Clinic[], appointments: AppointmentSlot[] ): ClinicAppointment[] => {
    const parsedAppointments: ClinicAppointment[] = [];
    for (const appointment of appointments) {
        const clinic = clinics.find(clinicItem => clinicItem.id === appointment.clinicId);
        
        if(!clinic) {
            continue;
        }

        parsedAppointments.push({
            ...appointment,
            clinic: clinic,
            availableTimes: extractTimeslots(appointment.startTime, appointment.durationInMinutes)
        });
    }
    return parsedAppointments;
}