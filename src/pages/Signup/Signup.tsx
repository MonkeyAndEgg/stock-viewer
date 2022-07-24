import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import Container from "../../components/Container/Container";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailErr, setThumbnailErr] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const { signup } = useSignup();

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  };

  const onClickSubmit = () => {
    signup(email, password, displayName, thumbnail);
  };

  const onChangeDisplayName = (e: any) => {
    setDisplayName(e.target.value);
  };

  const onFileUpload = (e: any) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    if (!selected) {
      setThumbnailErr('Please select a file');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailErr('Selected file must be an image');
      return;
    }
    if (selected.size > 100000) {
      setThumbnailErr('Image file size must be less than 100KB');
      return;
    }
    setThumbnail(selected);
    setThumbnailErr(null);
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

          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-displayName">Display Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-displayName"
              type='text'
              value={displayName}
              onChange={onChangeDisplayName}
              startAdornment={
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              }
              label="Display Name"
            />
          </FormControl>
          
          <Button
            variant="outlined"
            component="label"
            sx={{ width: '39ch', color: '#55c6a9' }}
          >
            上传头像
            <input
              type="file"
              onChange={onFileUpload}
              hidden
            />
          </Button>
          <Box>
            {thumbnailErr}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'end', width: '35ch' }}>
            <Button variant="contained" color="primary" sx={{ color: '#ffffff' }} onClick={onClickSubmit}>Signup</Button>
          </Box>
      </Stack>
    </Container>
  );
}