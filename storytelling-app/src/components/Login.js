import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from '../context/AuthContext';
import { Service } from "../service/service"
import { setToken } from '../service/tokenTools';

const service = new Service()
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const { login } = useAuth();
  const handleLogin = (data) => {
    console.log(data)
    const { token } = data;
    setToken(token)
    navigate("/")
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      username: username ?? "",
      password: password ?? ""
    }
    service.postAxios("/api/auth/login", obj, handleLogin)

  };

  return (
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: 'auto', height: 'auto' }}>
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 400 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={e => setUsername(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
