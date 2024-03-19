import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Убедитесь, что путь до AuthContext корректен

function Navigation() {
    const { auth } = useContext(AuthContext);

    return (
        <AppBar position="static" sx={{ marginBottom: 4, background: '#ebf0f6', borderBottom: '1px solid #dce4ed' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Лого" style={{ maxWidth: '200px', height: 'auto' }} />
                    </Link>
                </Box>
                {auth.isAuthenticated ? (
                    <Button color="inherit" component={Link} to="/dashboard" sx={{
                        color: '#4f4f4f',
                        marginRight: '10px',
                        ':hover': { backgroundColor: '#ddd' },
                        borderRadius: '0.25rem',
                        boxShadow: '0 4px 9px -4px rgba(0, 0, 0, 0.35)',
                        padding: '0.5rem 1.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        lineHeight: 1.5
                    }}>Личный кабинет</Button>
                ) : (
                    <>

                        <Button color="inherit" component={Link} to="/login" sx={{
                            color: '#4f4f4f',
                            marginRight: '10px',
                            ':hover': { backgroundColor: '#ddd' },
                            borderRadius: '0.25rem',
                            boxShadow: '0 4px 9px -4px rgba(0, 0, 0, 0.35)',
                            padding: '0.5rem 1.5rem',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            lineHeight: 1.5
                        }}>Войти</Button>

                        <Button color="inherit" component={Link} to="/register" sx={{
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
                        }}>Регистрация</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
