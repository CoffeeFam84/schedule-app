import { useState, useEffect } from 'react';
import { getAppointments } from '../api/appointments';
import { fetchClinicsListByIds } from '../api/clinics';
import { extractClinicIds } from '../utils/extractsClinicsld';
import { ClinicAppointment, LoginResponse } from '../zoomcare-api';
import { parseClinicsAppointments } from '../utils/parseClinicsAppointments';
import AppointmentsList from '../components/appointmentsList';
import Login from '../page/auth';

const Appointments = () => {
  const [userInfo, setUserInfo] = useState<LoginResponse | any>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [appointmentsList, setAppointmentsList] = useState<ClinicAppointment[]>();

  const fetchAppointments = async () => {
    try{
      const appointmentsResult = await getAppointments(userInfo?.authToken);
      console.log("appointmentsResult", appointmentsResult);
      const clinicsIdList = extractClinicIds(appointmentsResult.appointmentSlots);
      const clinicsList =  await fetchClinicsListByIds(clinicsIdList, userInfo?.authToken);
      const clinicAppointments = parseClinicsAppointments(clinicsList, appointmentsResult.appointmentSlots);
      setAppointmentsList(clinicAppointments);
    }
    catch(error){
      console.log("error:::", error);
    }
  }
  useEffect(() => {
    fetchAppointments();
  },[userInfo])
  if(isLogin && userInfo && appointmentsList){
    return(
      <AppointmentsList appointmentsList={appointmentsList} />
    )
  }
  return(
    <>
      <Login setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
    </>
  );
}

export default Appointments;