import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Container from "../../components/Container/Container";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useLogin();

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  };

  const onLogin = () => {
    login(email, password)
  };

  return (
    <Container>
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction='column'
        width='35ch'
        p={8}
        border='1px solid #b8b8b8'
        boxShadow='3px 3px 5px rgba(0,0,0,0.05)'
      >
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type='text'
            value={email}
            onChange={onChangeEmail}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={onChangePassword}
              startAdornment = {
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onToggleShowPassword}
                    edge="end"
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'end', width: '35ch' }}>
            <Button variant="contained" color="primary" sx={{ color: '#ffffff' }} onClick={onLogin}>登录</Button>
          </Box>
      </Stack>
    </Container>
  );
}