import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Для программного перенаправления после успешной регистрации

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Для отображения сообщений об ошибках
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Очистка предыдущих ошибок

    // Отправка запроса на регистрацию
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка регистрации');
      }
      return response.json();
    })
    .then(data => {
      console.log('Успешная регистрация:', data);
      navigate('/login'); 
    })
    .catch(error => {
      console.error('Ошибка регистрации:', error);
      setError(error.message);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Регистрация</Typography>
        {error && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{error}</Alert>}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Ваше имя"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Адрес"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Регистрация
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
