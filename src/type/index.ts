import { ClinicAppointment } from "../zoomcare-api";

export interface AppointmentsListProps {
  appointmentsList: ClinicAppointment[]
}

export interface AppointmentsListItemProps {
  appointment: ClinicAppointment
}