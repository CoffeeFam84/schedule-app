import AppointmentsListItem from "./AppointmentsListItem";
import { AppointmentsListProps } from '../../type';

const AppointmentsList = ( { appointmentsList }: AppointmentsListProps ) => {
  return(
    <>
      {
        appointmentsList?.map((item) => (
          <AppointmentsListItem key={item.id} appointment={item} />
        ))
      }
    </>
  );
}
export default AppointmentsList;