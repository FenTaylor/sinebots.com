import React from 'react';
import { Typography, Button, Grid, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Убедитесь, что импортировали Link

function HomePage() {
  return (
    <Container>
    <Grid container alignItems="center">
      <Grid item xs={12} md={7}>
        <Typography variant="h3" component="h1">Бесплатный ИИ Чат-Бот</Typography>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'normal' }}>Для Вашего Телеграм Канала</Typography>
        
        <Box my={4}>
          <Typography paragraph>Создайте своего уникального ИИ Чат-бота для Телеграма в пару кликов!</Typography>
          <Typography paragraph>Настройте Бота под Ваши потребности и тематику канала. Дружелюбный Бот-собеседник, или Полезный помощник? Психотерапевт или Юморист? Наши Боты могут всё!</Typography>
        </Box>
        
        <Button component={Link} to="/register" variant="contained" sx={{
          backgroundColor: '#4e69ff',
          borderColor: '#415cee',
          color: 'white',
          ':hover': { backgroundColor: '#415cee' },
          borderRadius: '0.25rem',
          boxShadow: '0 4px 9px -4px rgba(0, 0, 0, 0.35)',
          padding: '0.5rem 1.5rem',
          fontSize: '0.75rem',
          fontWeight: '500',
          lineHeight: 1.5
        }}>Создать Своего Бота Бесплатно</Button>
        
        <Typography variant="subtitle2" sx={{ display: 'block', marginTop: '8px', fontSize: '0.8rem' }}>В среднем, это занимает меньше 3-х минут!</Typography>
      </Grid>
      <Grid item xs={12} md={5} textAlign="end">
        <img src={`${process.env.PUBLIC_URL}/images/header-image.jpg`} alt="Header" style={{ maxWidth: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
    </Container>
  );
}

export default HomePage;
