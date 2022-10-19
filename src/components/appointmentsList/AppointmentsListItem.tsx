import { useMemo } from "react";
import { parsePhoneNumber } from "awesome-phonenumber";
import { Box, Typography, Stack, Button } from '@mui/material';
import { AppointmentsListItemProps } from '../../type';
import image from '../../assests/1.jpeg';

const AppointmentsListItem = ({ appointment }: AppointmentsListItemProps) => {
    const formattedPhone = useMemo(() => {
        const pn = parsePhoneNumber(appointment.provider.phoneNumber || "");
        return pn.getNumber("national")
    }, [appointment.provider.phoneNumber]);

    return (
      <>
        <Box sx={{margin:'30px', border:'1px solid grey', padding:'20px', borderRadius:'10px'}}>
            <Stack direction='column' spacing={1}>
                <Typography sx={{fontSize:'20px', fontWeight:900}}>{appointment.clinic.name}</Typography>
                <Typography>{appointment.clinic.address}</Typography>
                <Stack direction='row' spacing={0.5} alignItems='center'>
                    <Typography>{appointment.clinic.city}</Typography>
                    <Typography>{appointment.clinic.state}</Typography>
                    <Typography>{appointment.clinic.zipcode}</Typography>
                </Stack>
                <Stack direction='row' spacing={4} alignItems='center' >
                    <img src={image} style={{width:'100px'}} />
                    <Stack direction='column' spacing={1}>
                        <Typography sx={{color:'rgb(13,202,240)', fontSize:'20px'}}>{appointment.provider.name}, {appointment.provider.credentials}</Typography>
                        <Typography>{formattedPhone}</Typography>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            {appointment.availableTimes.map((item, index) => (
                                index < 5 &&
                                    <Button 
                                        sx={{backgroundColor:'#2E424A', 
                                        color:'white', 
                                        '&:hover':{
                                            backgroundColor:'black'
                                        }}} 
                                        key={index}>
                                        {item}
                                    </Button>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
      </>
    )
}

export default AppointmentsListItem;