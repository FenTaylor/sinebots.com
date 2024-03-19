import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';
import { AuthContext } from '../AuthContext'; // Предполагается, что этот путь корректен

function Dashboard() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({ user: '', isAuthenticated: false });
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Личный кабинет
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Добро пожаловать! Вы находитесь в личном кабинете.
        </Typography>
        <Button 
          variant="outlined" 
          onClick={handleLogout} 
          sx={{ mt: 3 }}>
          Выйти
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
