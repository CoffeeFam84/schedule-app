import { useState } from 'react';
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { userLogin } from '../../api/auth';

const LoginButton = styled(Button)({
  background: '#2E424A',
  color:'white',
  padding:'10px',
  '&:hover':{
    backgroundColor:'black'
  }
})

const Login = (props: any) => {
  const { setUserInfo, setIsLogin } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const getToken = async () => {
    const authResult = await userLogin(username, password);
    setUserInfo(authResult);
    setIsLogin(true);
  }
  const handleUserName = (event: any) => {
    setUsername(event.target.value);
  }
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  }
  return(
    <>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', flexDirection:'column'}}>
        <Typography sx={{fontSize:'25px', padding:'8px'}}>Sign In</Typography>
        <Typography sx={{color:'grey', padding:'5px'}}>Please verify your identify</Typography>
        <Stack direction='column' spacing={2} sx={{width:'400px'}}>
          <TextField id="outlined-basic" label="username" variant="outlined" onChange={handleUserName} />
          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"variant="outlined" onChange={handlePassword}/>
          <LoginButton onClick={() => {getToken();}}>Login</LoginButton>
        </Stack>
      </Box>
    </>
  );
}
export default Login;